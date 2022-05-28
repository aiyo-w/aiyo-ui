import React, { useState } from "react";
import { AiyoButton } from './components/button/aiyo-button';
import { AiyoAvatar } from './components/avatar/aiyo-avatar';
import { AiyoInput } from './components/input/aiyo-input';
import { AiyoCheckbox } from './components/checkbox/aiyo-checkbox';
import { AiyoSwitch } from './components/switch/switch';
import { AiyoInputNumber } from './components/input-number/aiyo-input-number';
import { AiyoCarousel } from "./components/carousel/aiyo-carousel";
import { AiyoProgress } from "./components/progress/aiyo-progress";
import { AiyoTag } from "./components/tag/aiyo-tag";
import { AiyoList } from "./components/list/aiyo-list";
import { AiyoPopover } from "./components/popover/aiyo-popover";
import { AiyoCollapse } from "./components/collapse/aiyo-collapse";
import { AiyoTabs, TabItem } from "./components/tabs/aiyo-tabs";
import { AiyoSelect, Option } from "./components/select/aiyo-select";
import { AiyoDivider } from "./components/divider/aiyo-divider";
import { AiyoTable } from "./components/table/aiyo-table";
import useProtal from "./components/modal/modal";
import api from './components/message/index';
import avatar from './avatar.jpg';
import hello from './Hello.png';

import './app.css';

const App = () => {
    const [checkedValue, setCheckedValue] = useState(false);
    const [switchValue, setSwitchValue] = useState(false);

    const doBtnClick = () => {
        console.log(11);
    }

    const doInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    const doCheckboxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedValue(!checkedValue);
        console.log(e.target.checked);
    }

    const doSwitchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSwitchValue(!switchValue);
        console.log(e.target.checked);
    }

    const doTagClose = () => {
        console.log("我被删除了");
    }

    const reactNode = (
        <ul>
            <li>nihao</li>
            <li>hello,adthibvjoae</li>
            <li>你好</li>
        </ul>
    );

    const reactNode1 = (
        <React.Fragment>
            <h3>title</h3>
            <br />
            <p>hello</p>
            <span>my name is apao</span>
        </React.Fragment>
    );

    const listData = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];

    const selectList = [
        'Racing',
        'Japanese',
        'Australian',
        'Man',
        'Los Angeles',
    ];

    const { Protal, handleClose, handleShow, isShow } = useProtal();

    const tableDataSource = [
        {
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        }, {
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        }, {
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];

    const tableColumns = [
        '姓名',
        '年龄',
        '地址',
    ];

    return (
        <React.Fragment>
            <h2>Button:</h2>
            <div className='button-box'>
                <AiyoButton iconClass='icon-smail' className='test' onClick={doBtnClick}>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' loading>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' disabled>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' plain>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' plain loading>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' disabled plain>apao</AiyoButton>
            </div>

            <div className='button-box'>
                <AiyoButton iconClass='icon-smail' className='test' shape="rounded">apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' shape="rounded" loading>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' shape="rounded" disabled>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' shape="rounded" plain>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' shape="rounded" plain loading>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' shape="rounded" disabled plain>apao</AiyoButton>
            </div>

            <div className='button-box'>
                <AiyoButton iconClass='icon-smail' className='test' shape="circle">apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' shape="circle" loading>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' shape="circle" disabled>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' shape="circle" plain>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' shape="circle" plain loading>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' shape="circle" disabled plain>apao</AiyoButton>

                <AiyoButton iconClass='icon-smail' className='test-btn' shape="circle">apao</AiyoButton>
            </div>

            <div className='button-box'>
                <AiyoButton iconClass='icon-smail' className='test' shape="square">apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' shape="square" loading>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' shape="square" disabled>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' shape="square" plain>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' shape="square" plain loading>apao</AiyoButton>
                <AiyoButton iconClass='icon-smail' className='test' shape="square" disabled plain>apao</AiyoButton>
            </div>

            <h2>Avatar:</h2>
            <div className='button-box'>
                <AiyoAvatar size='small'>U</AiyoAvatar>
                <AiyoAvatar size='middle'>U</AiyoAvatar>
                <AiyoAvatar size='large'>U</AiyoAvatar>
                <AiyoAvatar shape='square' size='small'>U</AiyoAvatar>
                <AiyoAvatar shape='square' size='middle'>U</AiyoAvatar>
                <AiyoAvatar shape='square' size='large'>U</AiyoAvatar>
            </div>
            <div className='button-box'>

                <AiyoAvatar shape='circle' src={avatar}></AiyoAvatar>
                <AiyoAvatar shape='square' src={avatar}></AiyoAvatar>
            </div>

            <h2>Input:</h2>
            <div className='button-box'>
                <AiyoInput placceholder='hello' size='small' maxLength={2} disabled />
                <AiyoInput placceholder='hello' defaultValue='11' disabled={true} />
                <AiyoInput placceholder='hello' size='large' disabled={false} defaultValue="1" onChange={doInputValueChange} />
            </div>

            <div className='button-box'>
                <AiyoInput placceholder='hello' disabled={true} prefix={<img src={hello} alt='11' height={18} />} />
                <AiyoInput placceholder='hello' disabled={true} suffix={<img src={hello} alt='11' height={18} />} />
                <AiyoInput placceholder='hello' disabled={true} prefix={<img src={hello} alt='11' height={18} />} suffix={<img src={hello} alt='11' height={18} />} />
                <AiyoInput placceholder='hello' disabled suffix=".com" />
            </div>

            <div className='button-box'>
                <AiyoInput addonBefore={<span>hello</span>} />
                <AiyoInput addonAfter={<div>after</div>} />
                <AiyoInput addonAfter={<p>11</p>} />
                <AiyoInput addonAfter={<a href='#'>111</a>} />
                <AiyoInput addonAfter={<select title='a' value={1}><option>11</option></select>} />
            </div>

            <h2>Checkbox:</h2>
            <div className='button-box'>
                <AiyoCheckbox value={checkedValue} onChange={doCheckboxValueChange} />
            </div>

            <h2>Switch:</h2>
            <div className='button-box'>
                <AiyoSwitch value={switchValue} id={"switch-input"} onChange={doSwitchValueChange} checkedColor={'blue'} />
            </div>

            <h2>InputNumber:</h2>
            <div className='button-box'>
                <AiyoInputNumber defaultValue={3} min={1} max={10} />
            </div>

            <h2>Carousel:</h2>
            <div className="button-box">
                <AiyoCarousel height="300px" width="500px" autoplay={true}>
                    <div style={{ backgroundColor: '#D7BDE2', lineHeight: '300px', textAlign: 'center', fontSize: '32px' }}>1</div>
                    <div style={{ backgroundColor: '#A3E4D7', lineHeight: '300px', textAlign: 'center', fontSize: '32px' }}>2</div>
                    <div style={{ backgroundColor: '#F9E79F', lineHeight: '300px', textAlign: 'center', fontSize: '32px' }}>3</div>
                    <div style={{ backgroundColor: '#AED6F1', lineHeight: '300px', textAlign: 'center', fontSize: '32px' }}>4</div>
                </AiyoCarousel>
            </div>

            <h2>Progress:</h2>
            <div className='button-box'>
                <AiyoProgress percent={50} />
                <AiyoProgress percent={20} showInfo={true} />
                <AiyoProgress percent={80} showInfo={true} color='#F1C40F' />
            </div>

            <h2>Tag:</h2>
            <div className='button-box'>
                <AiyoTag>Tag1</AiyoTag>
                <AiyoTag closable={true}>Tag2</AiyoTag>
                <AiyoTag color="#27AE60" borderColor="#27AE60" backgroundColor="#EAFAF1">Tag3</AiyoTag>
                <AiyoTag closable={true} color="#7D3C98" borderColor="#7D3C98" backgroundColor="#F5EEF8" onClose={doTagClose}>Tag3</AiyoTag>
            </div>

            <h2>List:</h2>
            <div className='button-box'>
                <div style={{ width: '400px', display: 'inline-block' }}>
                    <AiyoList dataSource={listData} renderItem={item => <span>{item}</span>} />
                </div>
                <div style={{ width: '400px', display: 'inline-block' }}>
                    <AiyoList
                        itemTypeStyle='circle'
                        header={<div>Header</div>}
                        footer={<div>footer</div>}
                        dataSource={listData}
                        renderItem={item => <span>{item}</span>} />
                </div>
            </div>
            <div className='button-box'>
                <div style={{ width: '600px', display: 'inline-block' }}>
                    <AiyoList itemTypeStyle={<div>[ITEM]</div>} dataSource={listData} renderItem={item => <span>{item}</span>} />
                </div>
            </div>

            <h2>Popover:</h2>
            <div className='button-box'>
                <AiyoPopover content={reactNode}>
                    <AiyoButton>TL pop</AiyoButton>
                </AiyoPopover>
                <AiyoPopover content={reactNode1} location='Top'>
                    <AiyoButton>Top pop</AiyoButton>
                </AiyoPopover>
                <AiyoPopover content={<span>你好呀，阿泡</span>} location='TR'>
                    <AiyoButton>TR pop</AiyoButton>
                </AiyoPopover>
                <AiyoPopover content={reactNode1} location='BR'>
                    <AiyoButton>BR pop</AiyoButton>
                </AiyoPopover>
                <AiyoPopover content={reactNode1} location='Bottom'>
                    <AiyoButton>Bottom pop</AiyoButton>
                </AiyoPopover>
                <AiyoPopover content={reactNode1} location='BL'>
                    <AiyoButton>BL pop</AiyoButton>
                </AiyoPopover>
            </div>
            <div className='button-box'>
                <AiyoPopover content={reactNode} location='RT'>
                    <AiyoButton>RT pop</AiyoButton>
                </AiyoPopover>
                <AiyoPopover content={reactNode} location='Right'>
                    <AiyoButton>Right pop</AiyoButton>
                </AiyoPopover>
                <AiyoPopover content={<span>你好呀，阿泡</span>} location='RB'>
                    <AiyoButton>RB pop</AiyoButton>
                </AiyoPopover>
                <AiyoPopover content={<span>你好呀，阿泡</span>} location='LT'>
                    <AiyoButton>LT pop</AiyoButton>
                </AiyoPopover>
                <AiyoPopover content={<span>你好呀，阿泡</span>} location='Left'>
                    <AiyoButton>Left pop</AiyoButton>
                </AiyoPopover>
                <AiyoPopover content={<span>你好呀，阿泡</span>} location='LB'>
                    <AiyoButton>LB pop</AiyoButton>
                </AiyoPopover>
            </div>

            <h2>Message:</h2>
            <div className='button-box'>
                <AiyoButton iconClass='icon-smail' className='test' onClick={() => { api.info('提示信息') }}>apao</AiyoButton>
            </div>

            <h2>Collapse:</h2>
            <div className='button-box' style={{ width: '800px' }}>
                <AiyoCollapse header="This is a collapse">
                    <p>A dog is a type of domesticated animal</p>
                    <p> Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
                </AiyoCollapse>
            </div>

            <h2>Modal:</h2>
            <div className='button-box' style={{ width: '800px' }}>
                <div>状态：{JSON.stringify(isShow)}</div>
                <AiyoButton onClick={handleShow}>click</AiyoButton>
                <Protal>
                    <div>这是一个简单的弹框</div>
                    <button onClick={handleClose}>关闭</button>
                </Protal>
            </div>

            <h2>Tabs:</h2>
            <div className='button-box'>
                <AiyoTabs defaultIndex="1" type="card">
                    <TabItem tab="tab 1">选项卡1</TabItem>
                    <TabItem tab="tab 2">选项卡2</TabItem>
                    <TabItem tab="tab 3">选项卡3</TabItem>
                </AiyoTabs>
            </div>

            <h2>Select:</h2>
            <div className='button-box'>
                <AiyoSelect
                    placeholder="请选择..."
                    dataSource={selectList}>
                </AiyoSelect>
            </div>

            <h2>Divider:</h2>
            <div className='button-box'>
                <AiyoDivider orientation="left">Left Text</AiyoDivider>
                <p>发布上的认同和诋毁覅尔松菊阿萨按配镜安排考试的活佛评价哦九年级</p>
                <AiyoDivider orientation="center">Center Text</AiyoDivider>
                <p>发布上的认同和诋毁覅尔松菊阿萨按配镜安排考试的活佛评价哦九年级</p>
                <AiyoDivider orientation="right">Right Text</AiyoDivider>

            </div>

            <h2>Table:</h2>
            <div className='button-box'>
                <div style={{ width: '600px', padding: '20px 20px', border: '1px solid' }}>
                    <AiyoTable dataSource={tableDataSource} colunms={tableColumns} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;