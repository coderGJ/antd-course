import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
import myStyles from './style.css';

const { Header, Footer, Sider, Content } = Layout;


// 引入子菜单组件
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {"collapsed": false}
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout>
                <Sider theme="light" width={256} style={{ minHeight: '100vh'}} trigger={null} collapsible collapsed={this.state.collapsed}>
                    <Menu theme="light" mode="inline" style={{ height: '100%'}} defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/">
                                <Icon type="pie-chart" />
                                <span>Helloworld</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}>
                            <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout >
                    <Header style={{ background: '#fff', padding: 0 ,}}>
                        <Icon
                            className={myStyles.trigger}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 20, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>my first ant design project</Footer>
                </Layout>
            </Layout>
        )
    }
}