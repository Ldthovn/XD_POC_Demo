import { observable, action, decorate, toJS } from 'mobx'

class DemoStore {
  isLoading = false
  setLoadingProgress = state => {
    this.isLoading = state
  }

  setCameraData = camData => {
    this.cameraData = camData
  }

  // setViewType = viewSwitch => {
  //   this.cameraViewType = viewSwitch
  // }
}

decorate(DemoStore, {
  isLoading: observable,
  setLoadingProgress: action,
})

export default new DemoStore()
