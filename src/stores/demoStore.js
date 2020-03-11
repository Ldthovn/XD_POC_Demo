import { observable, action, decorate, toJS } from 'mobx'

class DemoStore {
  isLoading = false
  cameraData = false
  cameraViewType = '3D'
  orthographic = false
  setLoadingProgress = state => {
    this.isLoading = state
  }

  setCameraData = camData => {
    this.cameraData = camData
  }

  // setViewType = viewSwitch => {
  //   this.cameraViewType = viewSwitch
  // }

  setOrthographic = viewOrthographic => {
    this.orthographic = viewOrthographic
  }
}

decorate(DemoStore, {
  isLoading: observable,
  setLoadingProgress: action,

  cameraData: observable,
  setCameraData: action,

  cameraViewType: observable,
  // setViewType: action,

  orthographic: observable,
  setOrthographic: action,
})

export default new DemoStore()
