import React,{ useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { theme, Layout, Menu } from 'antd';
import {SiBrandfolder} from 'react-icons/si'
import {BiCategoryAlt} from 'react-icons/bi'
import {ImBlog} from 'react-icons/im'
import {FaClipboardList, FaBloggerB} from 'react-icons/fa'
import {IoIosNotifications} from 'react-icons/io'
import {AiOutlineDashboard, AiOutlineShoppingCart ,AiOutlineUser, AiOutlineBgColors, AiOutlinePicLeft, AiOutlinePicRight}from 'react-icons/ai'
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const{
    token: {colorBgContainer},
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
         <h2 className='text-white fs-5 text-center py-3 mb-0'>
         <span className='sm-logo'>DC</span>
          <span className='lg-logo'>Dev Corner</span>
         </h2> 
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({key})=>{
          if(key == 'signout'){

          }else{
            navigate(key)
          }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4'/>,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiOutlineUser className='fs-4'/>,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <AiOutlineShoppingCart className='fs-4'/>,
              label: 'Catalog',
              children:[
                {
                  key: 'product',
                  icon: <AiOutlineShoppingCart className='fs-4'/>,
                  label: 'Add Product',
                },
                {
                  key: 'list-product',
                  icon: <AiOutlineShoppingCart className='fs-4'/>,
                  label: 'Product List',
                },
                {
                  key: 'brand',
                  icon: <SiBrandfolder className='fs-4'/>,
                  label: 'Brand',
                },
                {
                  key: 'list-brand',
                  icon: <SiBrandfolder className='fs-4'/>,
                  label: 'Brand List',
                },
                {
                  key: 'category',
                  icon: <BiCategoryAlt className='fs-4'/>,
                  label: 'Category',
                },
                {
                  key: 'list-category',
                  icon: <BiCategoryAlt className='fs-4'/>,
                  label: 'Category List',
                },
                {
                  key: 'color',
                  icon: <AiOutlineBgColors className='fs-4'/>,
                  label: 'Color',
                },
                {
                  key: 'list-color',
                  icon: <AiOutlineBgColors className='fs-4'/>,
                  label: 'Color List',
                }
              ]
            },
            {
              key: 'orders',
              icon: <FaClipboardList className='fs-4'/>,
              label: 'Orders',
            },
            {
              key: 'blog',
              icon: <FaBloggerB className='fs-4'/>,
              label: 'Blogs',
              children:[
                {
                  key: 'blog',
                  icon: <ImBlog className='fs-4'/>,
                  label: 'Add Blog',
                },
                {
                  key: 'list-blog',
                  icon: <FaBloggerB className='fs-4'/>,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <ImBlog className='fs-4'/>,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <FaBloggerB className='fs-4'/>,
                  label: 'Blog Category List',
                }
              ]
            },
            {
              key: 'enquiries',
              icon: <FaClipboardList className='fs-4'/>,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
        className='d-flex justify-content-between ps-1 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer
          }}
        >
          {React.createElement(collapsed ? MenuFoldOutlined : MenuUnfoldOutlined, {
            className: 'trigger',
            onClick:()=> setCollapsed(!collapsed)
          })}
          <div className='d-flex gap-4 align-items-center'>
            <div className='position-relative'>
            <IoIosNotifications className='fs-4'/>
            <span className='badge bg-warning rounded-circle p-1 position-absolute'>3</span>
            </div>
            <div className='d-flex gap-3 align-items-center dropdown'>
              <div>
               <img 
               width={32}
               height={32}
               src="../images/Admin-Profile-PNG-Clipart.png" alt="" /> 
              </div>
              <div role="button"
            id="dropdownMenuLink" 
            data-bs-toggle="dropdown" 
            aria-expanded="false">
                <h5 className='mb-0'>Kevin</h5>
                <p className='mb-0'>mdsamarasinghe53@gmail.com</p>
              </div>
              <div className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
              <li><Link className="dropdown-item py-1 mb-1" style={{height:"auto", lineHeight:"20px"}} to="/">View Profile</Link></li>
              <li><Link className="dropdown-item py-1 mb-1" style={{height:"auto", lineHeight:"20px"}} to="/">Sign Out</Link></li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer
          }}
        >
          <Outlet/> 
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout