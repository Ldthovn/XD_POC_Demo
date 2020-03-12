import { observable, action, decorate, toJS } from 'mobx'

class DemoStore {
  isLoading = false
  cameraData = false
  cameraViewType = '3D'
  orthographic = false
  gpsMode = 'none' // gps mode : none, fix, free

  setLoadingProgress = state => {
    this.isLoading = state
  }

  setCameraData = camData => {
    this.cameraData = camData
  }

  setViewType = viewSwitch => {
    this.cameraViewType = viewSwitch
  }

  setOrthographic = viewOrthographic => {
    this.orthographic = viewOrthographic
  }

  setGpsMode = mode => {
    this.gpsMode = mode
  }
}

decorate(DemoStore, {
  isLoading: observable,
  setLoadingProgress: action,

  cameraData: observable,
  setCameraData: action,

  cameraViewType: observable,
  setViewType: action,

  orthographic: observable,
  setOrthographic: action,

  gpsMode: observable,
  setGpsMode: action,
})

export default new DemoStore()
