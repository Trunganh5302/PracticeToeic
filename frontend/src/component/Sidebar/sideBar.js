import React from "react";
import { SideBarData,SideBarDataSW } from "./sidebarData";
import '../Sidebar/sideBar.css'


function Sidebar() {
    return(
        <>
            <aside className="SideBar">
                <div className="SidebarLR">
                    <h4 className="titleSidebarLR">Listening and Reading</h4>
                    <ul className="LRlist">
                        {SideBarData.map((val, key) =>{
                            return (
                                <li key={key} onClick={() => {window.location.pathname = val.link}}>
                                    {""}
                                    <div>{val.title}</div>
                                </li>

                            )
                        })}
                    </ul>
                </div>

                <div className="SidebarSW">
                    <h4 className="titleSidebarWR">Speacking and Writting</h4>
                    <ul className="WRlist">
                        {SideBarDataSW.map((val, key) =>{
                            return (
                                <li key={key} onClick={() => {window.location.pathname = val.link}}>
                                    {""}
                                    <div>{val.title}</div>
                                </li>

                            )
                        })}
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar