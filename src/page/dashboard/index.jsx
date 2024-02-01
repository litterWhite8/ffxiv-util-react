import styled from "styled-components";
import {NavLink, Outlet} from "react-router-dom";

const Page = styled.div`
      height: ${props => props.height}px;
      width: 100%;
      display: flex;
      flex-direction: row;

      .menu {
        width: 260px;
        background-color: rgb(0, 0, 0);
      }

      .menu-title {
        color: #ffffff;
        width: 100%;
        height: 50px;
        background-color: rgb(0, 0, 0);
        font-size: 25px;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .nav-link {
        width: calc(100% - 50px);
        border-radius: 8px;
        height: 40px;
        line-height: 40px;
        font-size: .875rem;
        padding:0 0 0 15px;
        margin: 3px 23px 3px 12px;
        display: block;
        color: #fdfdfd;
      }

      .nav-link:hover {
        background-color: rgb(59, 62, 66);


      }

      .content {
        width: calc(100% - 260px);
        background-color: #343540;
      }
    `

export default function DashBoard(){

    const pageHeight = window.innerHeight

    return (
        <Page height={pageHeight}>
            <div className={"menu"}>
                <h1 className={"menu-title"}>肥肥工具站</h1>
                <div style={{marginTop:'24px'}}>
                    <div style={{paddingLeft:'27px',color:'#999',fontSize:'.75rem',marginBottom:'7px'}}> 系统管理</div>
                    <NavLink to={"/dashboard/userManage"} className={"nav-link"}
                             style={({ isActive, isPending, isTransitioning }) => {
                                 return {
                                     backgroundColor: isActive ? "rgb(52,53,64)" : "",
                                 };
                             }}
                    >用户管理</NavLink>
                </div>
            </div>

            <div className={"content"}>
                <Outlet/>
            </div>
        </Page>
    )
}