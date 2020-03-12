import React, { Fragment, useState } from 'react'
import { inject, observer } from 'mobx-react'
import { Tooltip, Button, Collapse } from 'antd'
import { withRouter } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { ToolbarTopContainer, ToolbarTopItem } from './CustomStyled'

import Icon, {
  ProjectOutlined,
  BulbOutlined,
  SwitcherOutlined,
  ExperimentOutlined,
  // CheckOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons'

const { Panel } = Collapse

const ToolbarTop = props => {
  const { currentPage, history, commonStore, demoStore } = props

  // const switchModeIcons = {
  //   none: { icon: 'compass', title: '3D' },
  //   switch2D: { icon: 'environment', title: '2D' },
  //   switch25D: { icon: 'shake', title: '2.5D' },
  //   switch3D: { icon: 'compass', title: '3D' },
  // }
  const test = () => {
    var camData = {
      duration: 1,
      position: {
        x: -1619694.0038207266,
        y: 5731515.516635127,
        z: 2274488.5607231595,
      },
      direction: {
        x: -0.8706899180487627,
        y: -0.47299585100996294,
        z: -0.13481094738781416,
      },
      up: {
        x: -0.48937167137838883,
        y: 0.8057702664166693,
        z: 0.3335410694519222,
      },
    }
    demoStore.setCameraData(camData)
  }

  const viewSwitch = () => {
    if (demoStore.cameraViewType === '3D') {
      demoStore.cameraViewType = '2D'
    } else if (demoStore.cameraViewType === '2D') {
      demoStore.cameraViewType = '2.5D'
    } else if (demoStore.cameraViewType === '2.5D') {
      demoStore.cameraViewType = '3D'
    }
  }

  // const viewOrthographic = () => {
  //   demoStore.setOrthographic(true)
  // }

  const clickShowMainDrawer = () => {
    commonStore.setShowMainDrawer(true)
  }

  const viewByPage = () => {
    const defaultButton = (
      <Fragment>
        <ToolbarTopItem>
          <Tooltip title={'Feedback'}>
            <Button
              icon={<BulbOutlined />}
              size={commonStore.buttonSize}
              style={{
                backgroundColor: '#B2E2D7',
                border: '1px solid transparent',
              }}
              onClick={() => {
                window.open('http://xd-twin.ideas.aha.io/', '_blank')
                window.focus()
              }}
            />
          </Tooltip>
        </ToolbarTopItem>
      </Fragment>
    )
    switch (currentPage) {
      case 'home':
        return <>{defaultButton}</>
      case 'demo':
        return (
          <Fragment>
            {defaultButton}
            <ToolbarTopItem>
              <Tooltip title={'Test Move Camera'}>
                <Button
                  onClick={test}
                  icon={<EnvironmentOutlined />}
                  size={commonStore.buttonSize}
                />
              </Tooltip>
            </ToolbarTopItem>
            <ToolbarTopItem>
              <Tooltip title={'2D/3D View Switch'}>
                <Button
                  onClick={viewSwitch}
                  icon={<SwitcherOutlined />}
                  size={commonStore.buttonSize}
                />
              </Tooltip>
            </ToolbarTopItem>
            {/* <ToolbarTopItem>
              <Tooltip title={'Orthographic'}>
                <Button
                  onClick={viewOrthographic}
                  icon={<CheckOutlined />}
                  size={commonStore.buttonSize}
                />
              </Tooltip>
            </ToolbarTopItem> */}
            {/* <ToolbarTopItem
              activated={
                demoStore.cameraViewType !== 'none' &&
                demoStore.cameraViewType !== 'switch3D'
              }>
              <Tooltip
                // placement={'bottom'}
                title={switchModeIcons[demoStore.cameraViewType].title}>
                <Button
                  icon={switchModeIcons[demoStore.cameraViewType].icon}
                  size={commonStore.buttonSize}
                  onClick={() => {
                    if (
                      demoStore.cameraViewType === 'none' ||
                      demoStore.cameraViewType === 'switch3D'
                    )
                      demoStore.setViewType('switch2D')
                    else if (demoStore.cameraViewType === 'switch2D') {
                      demoStore.setGpsMode('switch25D')
                    } else {
                      demoStore.setGpsMode('none')
                    }
                  }}
                />
              </Tooltip>
            </ToolbarTopItem> */}
          </Fragment>
        )
      default:
        break
    }
  }

  return (
    <React.Fragment>
      <ToolbarTopContainer>
        <ToolbarTopItem>
          <MediaQuery query="(max-width: 768px)">
            <Button
              type="primary"
              size={commonStore.buttonSize}
              onClick={clickShowMainDrawer}>
              <span id="xd-logo">xD</span> Twin
            </Button>
          </MediaQuery>
          <MediaQuery query="(min-width: 769px)">
            <Button
              type="primary"
              size={commonStore.buttonSize}
              onClick={clickShowMainDrawer}>
              <span style={{ fontWeight: 'bolder', marginRight: 6 }}>xD</span>{' '}
              Twin
            </Button>
          </MediaQuery>
        </ToolbarTopItem>
        {currentPage ? viewByPage() : ''}
      </ToolbarTopContainer>
    </React.Fragment>
  )
}

export default withRouter(
  inject('commonStore', 'demoStore')(observer(ToolbarTop))
)
