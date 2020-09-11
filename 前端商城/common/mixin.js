import Check from '@/common/check.js'
export const common = {
	onLoad(){
		//优先顺序：mixin——onload > page_onload > mixin_onshow > page_onshow
		this.check_login()
	},
	onShow() { 
		
	},
	methods: {
		check_login() { 
			console.log('检查登录')
			if (!Check.a()) {
				return
			}
			this._load()
		},
		
	}
}
