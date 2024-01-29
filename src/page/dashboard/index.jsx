import styled from "styled-components";

export default function DashBoard(){
    const Page = styled.div`
      height: ${props => props.height}px;
      width: 100%;
      display: flex;
      flex-direction: row;

      .menu {
        width: 15%;
        background-color: rgb(43, 45, 48);
      }

      .menu-title {
        color: #ffffff;
        width: 100%;
        height: 50px;
        background-color: rgb(39, 40, 44);
        font-size: 25px;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .content {
        width: 85%;
        background-color: #1e1f22;
      }
    `

    const pageHeight = window.innerHeight

    return (
        <Page height={pageHeight}>
            <div className={"menu"}>
                <h1 className={"menu-title"}>肥肥工具站</h1>
            </div>

            <div className={"content"}>123</div>
        </Page>
    )
}