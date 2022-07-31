import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <nav className="mnb navbar navbar-default navbar-fixed-top">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span className="sr-only">Toggle navigation</span>
        <i className="ic fa fa-bars"></i>
      </button>
      <div style="padding: 15px 0;">
         <a href="#" id="msbo"><i className="ic fa fa-bars"></i></a>
      </div>
    </div>
    <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">En</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Draude Oba <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Settings</a></li>
            <li><a href="#">Upgrade</a></li>
            <li><a href="#">Help</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </li>
        <li><a href="#"><i className="fa fa-bell-o"></i></a></li>
        <li><a href="#"><i className="fa fa-comment-o"></i></a></li>
      </ul>
      <form className="navbar-form navbar-right">
        <input type="text" className="form-control" placeholder="Search..."/>
      </form>
    </div>
  </div>
</nav>
{/* <!--msb: main sidebar--> */}
<div className="msb" id="msb">
		<nav className="navbar navbar-default" role="navigation">
			{/* <!-- Brand and toggle get grouped for better mobile display --> */}
			<div className="navbar-header">
				<div className="brand-wrapper">
					{/* <!-- Brand --> */}
					<div className="brand-name-wrapper">
						<a className="navbar-brand" href="#">
							SAITAMA
						</a>
					</div>

				</div>

			</div>

			{/* <!-- Main Menu --> */}
			<div className="side-menu-container">
				<ul className="nav navbar-nav">

					<li><a href="#"><i className="fa fa-dashboard"></i> Dashboard</a></li>
					<li className="active"><a href="#"><i className="fa fa-puzzle-piece"></i> Components</a></li>
					<li><a href="#"><i className="fa fa-heart"></i> Extras</a></li>

					{/* <!-- Dropdown--> */}
					<li className="panel panel-default" id="dropdown">
						<a data-toggle="collapse" href="#dropdown-lvl1">
							<i className="fa fa-diamond"></i> Apps
						  <span className="caret"></span>
            </a>
						{/* <!-- Dropdown level 1 --> */}
						<div id="dropdown-lvl1" className="panel-collapse collapse">
							<div className="panel-body">
								<ul className="nav navbar-nav">
									<li><a href="#">Mail</a></li>
									<li><a href="#">Calendar</a></li>
									<li><a href="#">Ecommerce</a></li>
									<li><a href="#">User</a></li>
									<li><a href="#">Social</a></li>

									{/* <!-- Dropdown level 2 --> */}
									<li className="panel panel-default" id="dropdown">
										<a data-toggle="collapse" href="#dropdown-lvl2">
											<i className="glyphicon glyphicon-off"></i> Sub Level <span className="caret"></span>
										</a>
										<div id="dropdown-lvl2" className="panel-collapse collapse">
											<div className="panel-body">
												<ul className="nav navbar-nav">
													<li><a href="#">Link</a></li>
													<li><a href="#">Link</a></li>
													<li><a href="#">Link</a></li>
												</ul>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li><a href="#"><span className="glyphicon glyphicon-signal"></span> Link</a></li>
				</ul>
			</div>
            {/* <!-- /.navbar-collapse --> */}
		</nav>  
</div>
{/* <!--main content wrapper--> */}
<div className="mcw">
  {/* <!--navigation here-->
  <!--main content view--> */}
  <div className="cv">
    <div>
     <div className="inbox">
       <div className="inbox-sb">
         
       </div>
       <div className="inbox-bx container-fluid">
         <div className="row">
           <div className="col-md-2">
             <ul>
               <li><a href="#">Inbox</a></li>
               <li><a href="#">Sent</a></li>
               <li><a href="#">Trash</a></li>
             </ul>
           </div>
           <div className="col-md-10">
             <table className="table table-stripped">
               <tbody>
                 <tr>
                   <td><input type="checkbox"/></td>
                   <td><i className="fa fa-star"></i></td>
                   <td><b>Mozilla</b></td>
                   <td><b>In celebration of women and girls everywhere</b></td>
                   <td></td>
                   <td>Mar 10</td>
                 </tr>
                 <tr>
                   <td><input type="checkbox"/></td>
                   <td><i className="fa fa-star-o"></i></td>
                   <td>Dan Glenn</td>
                   <td>[ptcuser-announcements] - PTC/USER Expert Speaker Series Webinar March 9, 2017 11AM (EST)</td>
                   <td><i className="fa fa-paperclip"></i></td>
                   <td>Mar 10</td>
                 </tr>
                 <tr>
                   <td><input type="checkbox"/></td>
                   <td><i className="fa fa-star-o"></i></td>
                   <td>Jetpack</td>
                   <td>Announcing some highly requested improvements and our new affiliate program</td>
                   <td></td>
                   <td>Mar 08</td>
                 </tr>
                 <tr>
                   <td><input type="checkbox"/></td>
                   <td><i className="fa fa-star-o"></i></td>
                   <td>Jetpack</td>
                   <td>Announcing some highly requested improvements and our new affiliate program</td>
                   <td></td>
                   <td>Mar 08</td>
                 </tr>
                 <tr>
                   <td><input type="checkbox"/></td>
                   <td><i className="fa fa-star-o"></i></td>
                   <td>Jetpack</td>
                   <td>Announcing some highly requested improvements and our new affiliate program</td>
                   <td></td>
                   <td>Mar 08</td>
                 </tr>
                 <tr>
                   <td><input type="checkbox"/></td>
                   <td><i className="fa fa-star-o"></i></td>
                   <td>Jetpack</td>
                   <td>Announcing some highly requested improvements and our new affiliate program</td>
                   <td></td>
                   <td>Mar 08</td>
                 </tr>
                 <tr>
                   <td><input type="checkbox"/></td>
                   <td><i className="fa fa-star-o"></i></td>
                   <td>Jetpack</td>
                   <td>Announcing some highly requested improvements and our new affiliate program</td>
                   <td></td>
                   <td>Mar 08</td>
                 </tr>
                 <tr>
                   <td><input type="checkbox"/></td>
                   <td><i className="fa fa-star-o"></i></td>
                   <td>Jetpack</td>
                   <td>Announcing some highly requested improvements and our new affiliate program</td>
                   <td></td>
                   <td>Mar 08</td>
                 </tr>

               </tbody>
             </table>
           </div>
         </div>
       </div>
     </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Sidebar
