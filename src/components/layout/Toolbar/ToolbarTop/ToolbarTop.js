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
} from '@ant-design/icons'

const { Panel } = Collapse

const ToolbarTop = props => {
  const { currentPage, history, commonStore, demoStore } = props

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
        return <Fragment>{defaultButton}</Fragment>
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
