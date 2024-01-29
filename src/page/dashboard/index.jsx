import styled from "styled-components";
import {NavLink, Outlet, Route} from "react-router-dom";
import UserManage from "./userManage.jsx"

export default function DashBoard(){
    const Page = styled.div`
      height: ${props => props.height}px;
      width: 100%;
      display: flex;
      flex-direction: row;

      .menu {
        width: 15%;
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
        width: calc(100% - 34);
        border-radius: 5px;
        height: 40px;
        line-height: 40px;
        font-size: 17px;
        font-weight: 700;
        padding-left: 15px;
        margin: 3px 12px 3px 7px;
        display: block;
        color: #fdfdfd;
      }

      .nav-link:hover {
        background-color: rgb(59, 62, 66);


      }

      .content {
        width: 85%;
        background-color: #343540;
      }
    `

    const pageHeight = window.innerHeight

    return (
        <Page height={pageHeight}>
            <div className={"menu"}>
                <h1 className={"menu-title"}>肥肥工具站</h1>
                <div>
                    <NavLink to={"/dashboard/userManage"} className={"nav-link"}
                             style={({ isActive, isPending, isTransitioning }) => {
                                 return {
                                     backgroundColor: isActive ? "rgb(66,68,73)" : "",
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