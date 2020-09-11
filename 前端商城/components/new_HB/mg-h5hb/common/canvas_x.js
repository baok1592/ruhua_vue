
import QRCode from './qrCode'

import './style.scss'

/**
 * 绘制一个图片。
 */
function makeImage(options, callback) {
	console.log(1111)
	const {
		parts,
		width,
		height
	} = options
	let error = null

	// 初始化Canvas
	const canvas = document.createElement('canvas')
	const mainCtx = canvas.getContext('2d')
	canvas.width = width
	canvas.height = height
	mainCtx.fillStyle = options.background || '#fff'
	mainCtx.fillRect(0, 0, width, height)
	mainCtx.save()

	/**
	 * 设置宽高，针对负值定位做处理
	 * @param {number} x: positionX
	 * @param {number} y: positionY
	 * @param {object} o: width & height
	 * @param {number} o.width: 文字的宽度
	 * @param {number} o.height: 文字的高度
	 * @param {number} o.lineAlign: 文字的垂直对齐方式
	 * @param {number} o.lineNum: 文字的行数
	 * */
	function setPosition(x, y, o) {
		let positionX, positionY

		// 处理padding 与 负定位
		if (x < 0) {
			positionX = options.width + x - o.width
		}

		// 处理padding 与 负定位
		if (y < 0) {
			positionY = options.height + y - o.height
		}

		positionX = positionX || x || 0
		positionY = positionY || y || 0
		// 文字的垂直对齐方式处理
		if (o.lineAlign === 'middle') {
			positionY -= (o.height / 2) * o.lineNum - options.height / 2
		} else if (o.lineAlign === 'bottom') {
			positionY -= o.height * o.lineNum - options.height
		}

		// 文字的水平对齐方式处理
		if (o.textAlign === 'center') {
			positionX -= o.width / 2 - options.width / 2
		} else if (o.textAlign === 'right') {
			positionX -= o.width - options.width
		}


		return {
			x: positionX,
			y: positionY
		}
	}

	/**
	 * 针对圆角做处理
	 * */
	function tailorImg(x, y, w, h, r) {
		/**
		 * beginPath 与 closePath来关闭绘制圆，以免影响后续绘制，
		 * 因为不关闭绘制，会导致后续图片全部倍遮挡.
		 * */
		mainCtx.save()
		mainCtx.beginPath()
		mainCtx.moveTo(x + r, y)
		mainCtx.arcTo(x + w, y, x + w, y + h, r)
		mainCtx.arcTo(x + w, y + h, x, y + h, r)
		mainCtx.arcTo(x, y + h, x, y, r)
		mainCtx.arcTo(x, y, x + w, y, r)
		mainCtx.clip()
		mainCtx.closePath()
	}

	function handleTailorImg(options) {
		const {
			image: img,
			x,
			y,
			width: w,
			height: h,
			radius: r,
			padding: p,
			background: bg,
			clipOptions
		} = options

		// tailorImg中save保存当前画布，restore将保存的画布重新绘制
		tailorImg(x - p, y - p, w, h, r)
		mainCtx.fillStyle = bg || '#fff'
		mainCtx.fill()
		mainCtx.restore()

		tailorImg(x, y, w - p * 2, h - p * 2, r)
		// 针对非同比例的图片进行部分剪裁
		if (clipOptions) {
			clipOptions.x = clipOptions.x || 0
			clipOptions.y = clipOptions.y || 0

			// 缩放图片，方便截取选区
			if (clipOptions.zoom) {
				let dw, dh, offset = 0
				if (img.height > img.width) {
					dw = w - p * 2
					dh = img.height * w / img.width - p * 2
				} else {
					dw = img.width * h / img.height - p * 2
					dh = h - p * 2
				}
				// 裁剪居中偏移量
				if (clipOptions.align === 'center') {
					offset = Math.abs((dw - dh) / 2)
				}

				mainCtx.drawImage(img, x - clipOptions.x - (dw > dh ? offset : 0), y - clipOptions.y - (dh > dw ? offset : 0), dw,
					dh)
			} else {
				if (clipOptions.align === 'center') {
					const offsetX = Math.abs((img.width - w - p) / 2)
					const offsetY = Math.abs((img.height - h - p) / 2)
					mainCtx.drawImage(img, x - offsetX, x - offsetY)
				} else {
					mainCtx.drawImage(img, x - clipOptions.x, y - clipOptions.y)
				}
			}
		} else {
			mainCtx.drawImage(img, x, y, w - p * 2, h - p * 2)
		}
		mainCtx.restore()
	}

	/**
	 * 绘制处理各类数据
	 * @param {object} options: 绘制对象的配置
	 * @param {function} nextFunc: 下步的回调，是继续，还是执行成功回调
	 * */
	function handleText(options, nextFunc) {
		const bodyStyle = getComputedStyle(document.body)

		// 没有任何文本内容直接跳出
		if (!options.text || typeof options.text !== 'string') return nextFunc()

		const arr = options.text.toString().split('\n')

		// 设置字体后，再获取图片的宽高
		const lineHeight = parseFloat(options.size || bodyStyle.fontSize) * 1.2

		for (let i = 0, lineNum = arr.length; i < lineNum; i++) {
			// 设置字体
			mainCtx.textBaseline = 'top'
			mainCtx.font = `${options.bold ? `bold ` : ''}${options.size || bodyStyle.fontSize} ${bodyStyle.fontFamily}`
			mainCtx.fillStyle = options.color || bodyStyle.color

			// 设置文本对齐方式
			mainCtx.textAlign = 'left'

			// 设置透明度
			mainCtx.globalAlpha = options.opacity || 1
			const position = setPosition(options.x || 0, (options.y || 0) + lineHeight * i, {
				lineNum, // 处理lineAlign
				lineAlign: options.lineAlign,
				textAlign: options.textAlign,
				height: lineHeight,
				width: mainCtx.measureText(arr[i]).width
			})

			mainCtx.fillText(arr[i], position.x, position.y)
		}

		// 最后一个元素时，便执行回调,否则继续绘制
		nextFunc && nextFunc()
	}

	function dataURItoBlob(dataURI) {
		const byteString = atob(dataURI.split(',')[1])
		const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
		const ab = new ArrayBuffer(byteString.length)
		const ia = new Uint8Array(ab)
		for (let i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i)
		}
		return new Blob([ab], {
			type: mimeString
		})
	}

	function handleImage(options = {}, nextFunc) {
		console.log(options)
		const {
			width,
			height,
			x,
			y,
			url
		} = options
		if (!url) return console.error('缺失绘制的图片 url')
		const padding = options.padding || 0
		const img = new Image()
		const position = setPosition(x, y, {
			width,
			height
		})

		img.crossOrigin = 'anonymous'
		// 兼容问题：base64需要特殊处理
		img.src = !~url.indexOf('data:image/') ? url : URL.createObjectURL(dataURItoBlob(url))

		// 加载完成，绘制至画布
		img.onerror = err => {
			error = err

			// 最后一个元素时，便执行回调,否则继续绘制,
			nextFunc && nextFunc()
		}

		img.onload = () => {
			// 设置透明度
			mainCtx.globalAlpha = options.opacity || 1

			if (options.radius || padding > 0) {
				handleTailorImg({
					image: img,
					x: position.x + padding,
					y: position.y + padding,
					width: width || img.width,
					height: height || img.height,
					radius: ((height || img.height) - 2 * padding) / 2 * (options.radius || 0),
					padding,
					background: options.background,
					clipOptions: options.clipOptions
				})
			} else {
				mainCtx.drawImage(
					img,
					position.x + padding,
					position.y + padding,
					(width || img.width) - padding * 2,
					(height || img.height) - padding * 2
				)
			}

			// 最后一个元素时，便执行回调,否则继续绘制,
			nextFunc && nextFunc()
		}
	}

	function handleQrCode(options, nextFunc) {
		let {
			text,
			width,
			height,
			level
		} = options
		width = width || 200
		height = height || width || 200
		if (!text) return console.error('缺失绘制的二维码的 text')

		const qrCode = new QRCode(null, {
			text,
			width,
			height,
			correctLevel: level || 3,
			colorDark: '#000000',
			colorLight: '#ffffff'
		})
		const img = qrCode._oDrawing._elImage

		// 绘制处理同image
		img.onload = () => {
			handleImage(Object.assign(options, {
				url: img.src
			}), !options.logo && nextFunc)

			if (options.logo) {
				const ratio = 0.35
				const isMinus = options.x < 0 ? -1 : 1
				handleImage({
					type: 'image',
					url: options.logo || 'http://via.placeholder.com/100x100',
					width: width * ratio,
					height: height * ratio,
					x: isMinus * width * (0.5 - ratio / 2) + (options.x || 0),
					y: isMinus * height * (0.5 - ratio / 2) + (options.y || 0),
					padding: 2
				}, nextFunc)
			}
		}
	}

	// 初始化数据
	let len = parts.length
	let i = 0

	const start = function() {
		/**
		 * 最后一个元素时，便执行回调,否则继续绘制
		 * @param {number} opacity: 绘制的透明度，默认为 0
		 * */
		const nextFunc = () => {
			i++
			// 是否最后一个绘制对西那个
			!(len - i) ?
			callback && callback(error, canvas.toDataURL('image/jpeg', options.compress || .8)): start()
		}

		if (len - i) {
			switch (parts[i].type) {
				case 'text':
					handleText(parts[i], nextFunc)
					break
				case 'image':
					handleImage(parts[i], nextFunc)
					break
				case 'qrcode':
					handleQrCode(parts[i], nextFunc)
					break
				default:
			}
		}
	}
	start()
}

/**
 * 创建编辑节点DOM
 * @param container 视图渲染的容器
 * @param options 同 makeImage 配置项
 * @param callback 成功后的回调，参数接受合成后的 base64
 * */
function renderEditor(container, options, callback) {
	function _extends(o) {
		const _options = {}

		for (let key in o) {
			_options[key] = o[key]
		}
		return _options
	}

	// 过滤需要编辑的文字
	const _options = _extends(options)
	_options.parts = _options.parts
		.filter(item => item.editable && item.type !== 'text')

	// 生成HTML容器
	makeImage(_options, (error, data) => {
		// 初始化数据，为编辑状态却没有宽高的图片设置默认宽高,并导出该对象
		function initEditImage(callback) {
			// 过滤，并添加key值，留下可编辑的图片
			const editImageArr = options.parts
				.filter((item, key) => {
					item._key = key
					return item.editable && item.type === 'image'
				})

			// 处理编辑的图片：i用于循环遍历，editImageArrLen用于判断是否所有image都已加载完成
			let i, editImageArrLen
			editImageArrLen = i = editImageArr.length

			while (i--) {
				const img = new Image()
				img.src = editImageArr[i].url

				img.onload = ((i) => () => {
					// 初始化图片宽高
					editImageArr[i].width = editImageArr[i].width || img.width
					editImageArr[i].height = editImageArr[i].height || img.height
					editImageArrLen--

					// 全部处理完成，将可编辑的图片，渲染为DOM
					if (!editImageArrLen) {
						callback && callback(editImageArr)
					}
				})(i)
			}
		}

		// 针对input change事件，通过key值映射，修改图片源
		function updateOptions(imageData, key) {
			options.parts.map(item => {
				if (item._key === ~~key) {
					item.url = imageData
					return item
				}
				return item
			})

			renderEditor(container, options, callback)
		}

		function getBase64(e, callback) {
			const reader = new FileReader()

			reader.addEventListener('load', function() {
				callback(this.result)
			}, false)

			reader.readAsDataURL(e.target.files[0])

			return e
		}

		initEditImage(editImageList => {
			// 为每项编辑项添加input
			let html = ''

			// 过滤，并添加key值，留下可编辑的文字
			const editTextArr = options.parts
				.filter((item, key) => {
					item._key = key
					return item.editable && item.type === 'text'
				})

			// 渲染文字修改选框
			for (let i = editTextArr.length; i--;) {
				html +=
					`
            <textarea
              class="x-textarea-container"
              data-key="${editTextArr[i]._key}"
              style="
                left: ${editTextArr[i].x || 0}px;
                top: ${editTextArr[i].y || 0}px;
                color: ${editTextArr[i].color};
                font-size: ${editTextArr[i].size};
              "
              placeholder="${editTextArr[i].placeholder}"
              maxlength="${editTextArr[i].maxLength}"
            >${editTextArr[i].text}</textarea>
          `
			}

			// 渲染图片替换按钮
			for (let i = editImageList.length; i--;) {
				html +=
					`<div 
            class="x-input-container"
            style="
              left: ${editImageList[i].x || 0}px;
              top: ${editImageList[i].y || 0}px;
              width: ${editImageList[i].width}px;
              height: ${editImageList[i].height}px;
              "
            >
              <input
                class="x-input"
                data-key="${editImageList[i]._key}"
                data-click="${editImageList[i].selectImage}"
                type="${editImageList[i].selectImage ? 'button' : 'file'}"
                value="点击替换图片"
              />
              <a>点击替换图片</a>
            </div>`
			}

			// 创建视图
			container.innerHTML =
				`<div class="x-imaging-box">
          <img src="${data}" />
          ${html}
          ${options.buttonText !== null ? (
          options.buttonText ?
            `<a class="x-make-image">${options.buttonText}</a>` :
            '<a class="x-make-image">绘制画布</a>') : ''
          }
          </div>`

			// 冒泡筛选input change事件
			const handleChange = e => {
				if (e.target.className === 'x-input') {
					const key = e.target.getAttribute('data-key')
					getBase64(e, imageData => updateOptions(imageData, key))
				}
			}

			container.addEventListener('change', handleChange, false)

			// 冒泡筛选input click事件
			const handleClick = e => {
				// 点击替换按钮的事件
				if (e.target.className === 'x-input') {
					const key = e.target.getAttribute('data-key')
					const cb = imageData => updateOptions(imageData, key)

					options.parts[key].selectImage && (options.parts[key].selectImage)(cb)
				}

				// 合并画布
				if (e.target.className === 'x-make-image') {
					const textDom = document.getElementsByClassName('x-textarea-container')

					for (let i = textDom.length; i--;) {
						const key = textDom[i].getAttribute('data-key')

						options.parts[key].text = textDom[i].value
					}

					makeImage(options, (err, data) => {
						container.innerHTML =
							`<div class="x-imaging-box">
                <img src="${data}" />
                ${options.resetButtonText !== null ? (
                options.resetButtonText ?
                  `<a class="x-again-make-image">${options.resetButtonText}</a>` :
                  '<a class="x-again-make-image">重新编辑</a>') : ''
                }
              </div>`
					})
				}

				// 重新编辑
				if (e.target.className === 'x-again-make-image') {
					// 移除监听避免重复编辑，累加监听
					container.removeEventListener('click', handleClick, false)
					container.removeEventListener('change', handleChange, false)

					renderEditor(container, options, callback)
				}
			}

			container.addEventListener('click', handleClick, false)

			callback && callback(data)
		})

	})

	// 返回一个生成画布的方法
	return {
		getValue: () => options,
		makeImage: callback => {
			makeImage(options, callback)
		}
	}
}

export default {
	makeImage,
	renderEditor
}
