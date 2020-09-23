import React from 'react';
import { connect, Dispatch } from 'umi';
import {Form, Input, DatePicker, Button} from 'antd';
import Show from '@/components/Show';
import {Moment} from 'moment';

const {Item} = Form;
const {RangePicker} = DatePicker;
const rangePickerStyle = {width: 270, marginRight: 8};

interface ISearchProps {
  identifier?: string,
  deviceId?: string,
  installTime?: [Moment, Moment],
  createTime?: [Moment, Moment],
  reportTimestamp?: [Moment, Moment],
  username?: string,
  identifierPlaceholder?: string,
  deviceIdPlaceholder?: string,
  hideIdentifier?: boolean,
  hideDeviceId?: boolean,
  hideHighBtn?: boolean,
  showInstallTime?: boolean,
  showCreateTime?: boolean,
  showReportTime?: boolean,
  showUserName?: boolean,
  showHighPanel?: boolean,
  onSearch?: () => {}
}

export default (props: ISearchProps) => {
  const {
    identifier,
    deviceId,
    installTime,
    createTime,
    reportTimestamp,
    username,
    identifierPlaceholder = '设备标识',
    deviceIdPlaceholder = '设备编号',
    hideIdentifier,
    hideDeviceId,
    hideHighBtn,
    showInstallTime,
    showCreateTime,
    showReportTime,
    showUserName,
    showHighPanel,
    onSearch
  } = props;
  const [form] = Form.useForm();

  const handleSearch = () => {

  };

  return (
    <Form
      layout='inline'
      form={form}
      className='search'
    >
      <Show value={!hideIdentifier}>
        <Item name='identifier'>
          <Input
            onPressEnter={handleSearch}
            value={identifier}
            className='input'
            placeholder={identifierPlaceholder}
          />
        </Item>
      </Show>
      <Show value={!hideDeviceId}>
        <Item name='deviceid'>
          <Input
            name='deviceid'
            onPressEnter={handleSearch}
            value={deviceId}
            className='input'
            placeholder={deviceIdPlaceholder}
          />
        </Item>
      </Show>
      <Show value={showInstallTime}>
        <Item name='installTime'>
          <RangePicker
            value={installTime}
            showTime={{ format: 'HH:mm' }}
            format='YYYY-MM-DD HH:mm'
            style={rangePickerStyle}
            placeholder={['开始安装时间', '结束安装时间']}
          />
        </Item>
      </Show>
      <Show value={showCreateTime}>
        <Item name='createTime'>
          <RangePicker
            value={createTime}
            showTime={{ format: 'HH:mm' }}
            format='YYYY-MM-DD HH:mm'
            style={rangePickerStyle}
            placeholder={['开始入库时间', '结束入库时间']}
          />
        </Item>
      </Show>
      <Show value={showReportTime}>
        <Item name='reportTimestamp'>
          <RangePicker
            value={reportTimestamp}
            showTime={{ format: 'HH:mm' }}
            format='YYYY-MM-DD HH:mm'
            style={rangePickerStyle}
            placeholder={['开始入库时间', '结束入库时间']}
          />
        </Item>
      </Show>
      <Show value={showUserName}>
        <Item name='username'>
          <Input
            value={username}
            className='input'
            placeholder='人员名称'
            onPressEnter={handleSearch}
          />
        </Item>
      </Show>
      <Show value={!hideHighBtn}>
        <Button>高级</Button>
      </Show>
      <Show value={showHighPanel}>
        <div className='high-plane deep-2-shadow'>

        </div>
      </Show>
    </Form>
  );
};
