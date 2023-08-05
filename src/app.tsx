import React, { ReactNode, useState } from "react";
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
import { Input } from "antd";


import './app.css';

const App = () => {
    const [checkedValue, setCheckedValue] = useState(false);
    const [switchValue, setSwitchValue] = useState(false);
    const [currentMenuList, setCurrentMenuList] = useState(0);
    const componentList = [
        'Button', 'Avatar', 'Input', 'Checkbox',
        'Switch', 'InputNumber', 'Carousel', 'Progress',
        'Tag', 'List', 'Popover', 'Message',
        'Collapse', 'Modal', 'Tabs', 'Select',
        'Divider', 'Table'];

    const doMenuListClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const curIndex = e.currentTarget.getAttribute('data-index');
        if (curIndex) setCurrentMenuList(Number(curIndex));
        else setCurrentMenuList(0);
    }
    const renderMenuList = () => {
        let itemlistEl: ReactNode[] = [];
        for (let i = 0; i < componentList.length; i++) {
            itemlistEl.push(
                <li key={i}
                    className={currentMenuList === i ? 'active' : ''} onClick={doMenuListClick}
                    data-index={i}>
                    <a href={`#${componentList[i]}`}>{componentList[i]}</a>
                </li>);
        }
        return (
            <ul>{itemlistEl}</ul>
        );
    }

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
    const handleGetValue: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        console.log(e.currentTarget.value);
    }

    return (
        <div className="container">
            <div className="left-menu">
                {renderMenuList()}
            </div>
            <div className="content">
                <h2>antd input</h2>
                <div className="input-box">
                    <Input placeholder="Basic usage" />
                    <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" onPressEnter={handleGetValue} />
                    {/* <button type="button" onClick={handleGetValue}>点击</button> */}
                </div>
                <div id="Button">
                    <AiyoDivider orientation="center"><h2>Button</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box">
                            <AiyoButton>默认按钮</AiyoButton>
                            <AiyoButton plain>朴素按钮</AiyoButton>
                            <AiyoButton text>文字按钮</AiyoButton>
                        </div>

                        <AiyoDivider orientation="center">按钮样式</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>

                    <div className="demo">
                        <div className="component-box">
                            <AiyoButton plain>矩形按钮</AiyoButton>
                            <AiyoButton shape="rounded" plain>圆角按钮</AiyoButton>
                            <AiyoButton shape="circle" iconClass='icon-smail' plain>圆形</AiyoButton>
                            <AiyoButton shape="square" iconClass='icon-smail' plain>矩形</AiyoButton>
                        </div>

                        <AiyoDivider orientation="center">按钮形状</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>

                    <div className="demo">
                        <div className="component-box">
                            <AiyoButton shape="rounded" plain disabled>禁用按钮</AiyoButton>
                            <AiyoButton shape="rounded" plain loading>loading</AiyoButton>
                        </div>


                        <AiyoDivider orientation="center">按钮状态</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>

                    <div className="demo">
                        <div className="component-box">
                            <AiyoButton shape="rounded" onClick={doBtnClick}>click me</AiyoButton>
                        </div>

                        <AiyoDivider orientation="center">点击事件</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>

                <div id="Avatar">
                    <AiyoDivider orientation="center"><h2>Avatar</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box">
                            <AiyoAvatar size='small'>U</AiyoAvatar>
                            <AiyoAvatar size='middle'>U</AiyoAvatar>
                            <AiyoAvatar size='large'>U</AiyoAvatar>
                        </div>

                        <AiyoDivider orientation="center">头像大小</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>

                    <div className="demo">
                        <div className="component-box">
                            <AiyoAvatar>U</AiyoAvatar>
                            <AiyoAvatar shape='square'>U</AiyoAvatar>
                        </div>

                        <AiyoDivider orientation="center">头像形状</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>

                    <div className="demo">
                        <div className="component-box">
                            <AiyoAvatar shape='circle' src={avatar}></AiyoAvatar>
                            <AiyoAvatar shape='square' src={avatar}></AiyoAvatar>
                        </div>

                        <AiyoDivider orientation="center">自定义头像图片</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>

                <div id="Input">
                    <AiyoDivider orientation="center"><h2>Input</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box">
                            <AiyoInput placceholder='hello' />
                        </div>

                        <AiyoDivider orientation="center">基本使用</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>

                    <div className="demo">
                        <div className="component-box">
                            <AiyoInput placceholder='small size' size='small' />
                            <AiyoInput placceholder='default size' />
                            <AiyoInput placceholder='large size' size='large' />
                        </div>

                        <AiyoDivider orientation="center">size</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>

                    <div className="demo">
                        <div className="component-box">
                            <AiyoInput addonBefore={<span>https://</span>} defaultValue='mysite' />
                            <AiyoInput
                                defaultValue="mysite"
                                addonBefore={<select title='a' defaultValue={1} ><option value={1}>https://</option><option value={2}>http://</option></select>}
                                addonAfter={<select title='a' defaultValue={1} ><option value={1}>.com</option><option value={2}>.cn</option></select>}
                            />
                        </div>

                        <AiyoDivider orientation="center">前置/后置标签</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>
                {/* <div className='button-box'>
                <AiyoInput placceholder='hello' disabled={true} prefix={<img src={hello} alt='11' height={18} />} />
                <AiyoInput placceholder='hello' disabled={true} suffix={<img src={hello} alt='11' height={18} />} />
                <AiyoInput placceholder='hello' disabled={true} prefix={<img src={hello} alt='11' height={18} />} suffix={<img src={hello} alt='11' height={18} />} />
                <AiyoInput placceholder='hello' disabled suffix=".com" />
            </div> */}

                <div id="Checkbox">
                    <AiyoDivider orientation="center"><h2>Checkbox</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box">
                            <AiyoCheckbox value={checkedValue} id={"checkbox-input"} onChange={doCheckboxValueChange} />
                        </div>

                        <AiyoDivider orientation="center">基本使用</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>

                <div id="Switch">
                    <AiyoDivider orientation="center"><h2>Switch</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box">
                            <AiyoSwitch value={switchValue} id={"switch-input"} onChange={doSwitchValueChange} checkedColor={'blue'} />
                        </div>

                        <AiyoDivider orientation="center">基本使用</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>

                <div id="InputNumber">
                    <AiyoDivider orientation="center"><h2>InputNumber</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box">
                            <AiyoInputNumber defaultValue={3} min={1} max={10} />
                        </div>

                        <AiyoDivider orientation="center">基本使用</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>

                <div id="Carousel">
                    <AiyoDivider orientation="center"><h2>Carousel</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box">
                            <AiyoCarousel height="300px" width="500px">
                                <div style={{ backgroundColor: '#D7BDE2', lineHeight: '300px', textAlign: 'center', fontSize: '32px', color: 'white' }}>1</div>
                                <div style={{ backgroundColor: '#A3E4D7', lineHeight: '300px', textAlign: 'center', fontSize: '32px', color: 'white' }}>2</div>
                                <div style={{ backgroundColor: '#F9E79F', lineHeight: '300px', textAlign: 'center', fontSize: '32px', color: 'white' }}>3</div>
                                <div style={{ backgroundColor: '#AED6F1', lineHeight: '300px', textAlign: 'center', fontSize: '32px', color: 'white' }}>4</div>
                            </AiyoCarousel>
                        </div>

                        <AiyoDivider orientation="center">基本使用</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>

                </div>

                <div id="Progress">
                    <AiyoDivider orientation="center"><h2>Progress</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box">
                            <AiyoProgress percent={50} />
                        </div>

                        <AiyoDivider orientation="center">基本使用</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>

                    <div className="demo">
                        <div className="component-box">
                            <AiyoProgress percent={20} showInfo={true} />
                        </div>

                        <AiyoDivider orientation="center">显示数值</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>

                    <div className="demo">
                        <div className="component-box">
                            <AiyoProgress percent={80} showInfo={true} color='#F1C40F' />
                        </div>

                        <AiyoDivider orientation="center">更改颜色</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>

                <div id="Tag">
                    <AiyoDivider orientation="center"><h2>Tag</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box">
                            <AiyoTag>Tag1</AiyoTag>
                        </div>

                        <AiyoDivider orientation="center">基本使用</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>

                    <div className="demo">
                        <div className="component-box">
                            <AiyoTag closable={true}>Tag2</AiyoTag>
                        </div>

                        <AiyoDivider orientation="center">带关闭按钮</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>

                    <div className="demo">
                        <div className="component-box">
                            <AiyoTag color="#27AE60" borderColor="#27AE60" backgroundColor="#EAFAF1">Tag3</AiyoTag>
                            <AiyoTag closable={true} color="#7D3C98" borderColor="#7D3C98" backgroundColor="#F5EEF8" onClose={doTagClose}>Tag3</AiyoTag>
                        </div>

                        <AiyoDivider orientation="center">自定义颜色</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>

                <div id="List">
                    <AiyoDivider orientation="center"><h2>List</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box">
                            <AiyoList dataSource={listData} renderItem={item => <span>{item}</span>} />
                        </div>

                        <AiyoDivider orientation="center">基本使用</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>

                    <div className="demo">
                        <div className="component-box">
                            <AiyoList
                                header={<div>Header</div>}
                                footer={<div>footer</div>}
                                dataSource={listData}
                                renderItem={item => <span>{item}</span>} />
                        </div>

                        <AiyoDivider orientation="center">带head和foot</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>

                    <div className="demo">
                        <div className="component-box">
                            <AiyoList itemTypeStyle={<div>[ITEM]</div>} dataSource={listData} renderItem={item => <span>{item}</span>} />
                            <AiyoList itemTypeStyle='circle' dataSource={listData} renderItem={item => <span>{item}</span>} />
                        </div>

                        <AiyoDivider orientation="center">带前缀</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>

                <div id="Popover">
                    <AiyoDivider orientation="center"><h2>Popover</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box popover">
                            <div className="top">
                                <AiyoPopover content={reactNode}>
                                    <AiyoButton>TL pop</AiyoButton>
                                </AiyoPopover>
                                <AiyoPopover content={reactNode1} location='Top'>
                                    <AiyoButton>Top pop</AiyoButton>
                                </AiyoPopover>
                                <AiyoPopover content={<span>你好呀，阿泡</span>} location='TR'>
                                    <AiyoButton>TR pop</AiyoButton>
                                </AiyoPopover>
                            </div>
                            <div className="left">
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
                            <div className="right">
                                <AiyoPopover content={reactNode} location='RT'>
                                    <AiyoButton>RT pop</AiyoButton>
                                </AiyoPopover>
                                <AiyoPopover content={reactNode} location='Right'>
                                    <AiyoButton>Right pop</AiyoButton>
                                </AiyoPopover>
                                <AiyoPopover content={<span>你好呀，阿泡</span>} location='RB'>
                                    <AiyoButton>RB pop</AiyoButton>
                                </AiyoPopover>
                            </div>
                            <div className="bottom">
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
                        </div>

                        <AiyoDivider orientation="center">基本使用</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>

                <div id="Message">
                    <AiyoDivider orientation="center"><h2>Message</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box">
                            <AiyoButton iconClass='icon-smail' className='test' onClick={() => { api.info('提示信息') }}>apao</AiyoButton>
                        </div>

                        <AiyoDivider orientation="center">基本使用</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>

                <div id="Collapse">
                    <AiyoDivider orientation="center"><h2>Collapse</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box collapse">
                            <AiyoCollapse header="This is a collapse">
                                <p>A dog is a type of domesticated animal</p>
                                <p> Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
                            </AiyoCollapse>
                            <AiyoCollapse header="This is a collapse">
                                <p>A dog is a type of domesticated animal</p>
                                <p> Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
                            </AiyoCollapse>
                        </div>

                        <AiyoDivider orientation="center">基本使用</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>

                <div id="Modal">
                    <AiyoDivider orientation="center"><h2>Modal</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box collapse">
                            <AiyoButton onClick={handleShow}>click</AiyoButton>
                            <Protal>
                                <div>这是一个简单的弹框</div>
                                <button onClick={handleClose}>关闭</button>
                            </Protal>
                        </div>

                        <AiyoDivider orientation="center">基本使用</AiyoDivider>
                        <div>状态：{JSON.stringify(isShow)}</div>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>

                <div id="Tabs">
                    <AiyoDivider orientation="center"><h2>Tabs</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box collapse">
                            <AiyoTabs defaultIndex="1" type="card">
                                <TabItem tab="tab 1">选项卡1</TabItem>
                                <TabItem tab="tab 2">选项卡2</TabItem>
                                <TabItem tab="tab 3">选项卡3</TabItem>
                            </AiyoTabs>
                        </div>

                        <AiyoDivider orientation="center">基本使用</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>

                <div id="Select">
                    <AiyoDivider orientation="center"><h2>Select</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box collapse">
                            <AiyoSelect
                                placeholder="请选择..."
                                dataSource={selectList}
                            // onChange={ }
                            >
                            </AiyoSelect>
                        </div>

                        <AiyoDivider orientation="center">基本使用</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>

                <div id="Divider">
                    <AiyoDivider orientation="center"><h2>Divider</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box collapse">
                            <AiyoDivider orientation="left">Left Text</AiyoDivider>
                            <p>发布上的认同和诋毁覅尔松菊阿萨按配镜安排考试的活佛评价哦九年级</p>
                            <AiyoDivider orientation="center">Center Text</AiyoDivider>
                            <p>发布上的认同和诋毁覅尔松菊阿萨按配镜安排考试的活佛评价哦九年级</p>
                            <AiyoDivider orientation="right">Right Text</AiyoDivider>
                        </div>

                        <AiyoDivider orientation="center">基本使用</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>

                <div id="Table">
                    <AiyoDivider orientation="center"><h2>Table</h2></AiyoDivider>
                    <div className="demo">
                        <div className="component-box collapse">
                            <AiyoTable dataSource={tableDataSource} colunms={tableColumns} />
                        </div>

                        <AiyoDivider orientation="center">基本使用</AiyoDivider>
                        <span>这里放些介绍啥的...</span>
                    </div>
                </div>
            </div>
            <div className="goto-github">
                <a href="https://github.com/aiyo-w/aiyo-ui" title="项目地址">''</a>
            </div>
        </div >
    );
}

export default App;