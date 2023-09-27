import { Outlet } from "react-router-dom";
import './main-container.scss'
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

function MainContainer() {
	return (
		<div className="container-fluid p-0 h-100">
			<Navbar />
			<div className="row no-gutters  main-container">
				<div className="col-2 col-xs-d-none col-md-2 bg-dark w-100 h-100">
					<Sidebar />
				</div>
				<div className="col-12 col-sm-10 col-md-10 text-center h-100 w-100 ">
				 <Outlet/>
				</div>
			</div>
		</div>
	);
}

export default MainContainer;