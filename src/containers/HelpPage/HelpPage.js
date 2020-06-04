import React,{Component} from 'react';
import classes from './HelpPage.css';
import {scrollbar} from '../../commonfiles/scrollbar.css'
export default class HelpPage extends Component{
  render(){
    return(
      <div className={classes.flexContainer +' '+ scrollbar}>
        <div className="help">
          <p className="heading"><b><u>Getting started</u></b></p>
          <p>Despite costly on-premises security appliances (such as Cisco, Symantec/Blue Coat,
            Websense/Forecepoint, McAfee, Check Point, FireEye, Fortinet, Palo Alto Networks)
            many enterprise networks still remain vulnerable due to functionality, performance,
            or misconfiguration issues. Security Management Center visualizes the operational
            security posture, for security infrastructure, in holistic and technology agnostic view.</p>
          <p><b><u>SMC as a part of WIPRO</u></b></p>
          <p>Wipro uses Security Management Center to visualize the security infrastructure, holistically to view its
          customer’s security posture. The consolidated view is comprised of risk, reliability and efficiency posture
          of the infrastructure. Wipro helps organizations look at their security infrastructure through SMC with the
          richness of correlated data, aggregated information and transparency of the services being offered</p>
          <p className="heading"><b><u>How to use SMC2.0:</u></b></p>
          <p>SMC equips you with the hassle-free environment of getting a secure working environment.</p>
          <p>Login to the application with valid credentials.
          Select the date and time for which you want to monitor the status.
          Here you go...it gives you an overview of what percentage is the compliance value of the devices in your working
          environment.</p>
          <p>Passwords must be changed after certain duration to make it more and more secure.SMC makes it easy to change
          your password.
          Your system is secured more than ever...</p>
          <p className="heading"><b><u>Features</u></b></p>
          <p>You can view or monitor the status of all your devices not only for the current time but for the past as well.
          Just select the date and time as Q1(upto 6am), Q2(6am to 12am), Q3(12pm to 6pm), Q4(6pm to 12am).
          You can view the technology trend for the full week and the technology status of the selected date.
          Top 5 compliant as well as non-compliant usecases are integrated in the homepage as well.Along with the usecases,
          you also get to see the devices which are listed under these categories to check if they are compliant or not.</p>

          <p>We can see the calculation of the compliance logic in the configpage where the
          weightage of technology as well as subcategory is displayed.</p>
          <p><u>Weightage Guide:</u> The weightages can be changed manually by going to the config page in the portal.
          This section is only available to the admin users.
          The weightages for technologies should all add up to 100.
          The weightages for subcategories can be adjusted by going in each category and adjusting the weightages for the subcategories in that category. These weightages for each category must add up to 100.
          The weightage for each usecase can be defined by going to the Usecase Weightage section and selecting the technology and then the weightages for the usecases belonging to the technology can be changed. These usecase weightages for each technology must add up to 100.
          Once the desired section’s weightages are updated, you need to click Validate to check the sum of the section, if its 100 or not.
          After validating you can see the submit button or the cancel button for the section. After pressing submit, go to home page and refresh the portal. The values now are calculated using the new weightages.
          </p>
          <p><u>SMC Map</u>: The overall hierarchical structure of SMC is explained by an excellent graphics in the form of map.The SMC Map gives the complete drilldown view from the categories to the device details. </p>
          <p><u>Reports Guide</u>:
          The brief overview section displays the top 4 usecases’ compliance values.
          The top 4 usecases for each technology are chosen on the basis of weightages
          of the usecases. The usecases with maximum weightage i.e.
          maximum importance are shown as a brief overview into the technology.
          </p>
          <p>There are 2 sections of the Reports page:
          <ul>
          <li><p><u>Standard Reports</u>:These consist of 3 possible reports
          <ul>
          <li>Technology Report: This consists all the usecases belonging to the technology.</li>
          <li>Top Compliant Usecase Report: This consists of the top 5/10/20 (based on the selection)
           compliant usecases for each technology.</li>
          <li>Top Non-Compliant Usecase Report: •	This consists of the top 5/10/20 (based on the selection)
          non-compliant usecases for each technology.</li>
          </ul>
          </p>
          </li>
          <li>
          <p><u>Custom Reports</u>: This report can be generated by selecting specific categories,
          subcategories, technologies, and usecases for which the report is to be generated. This report
          currently supports pdf format.</p>
          </li>
          </ul>
          </p>
          <p><b><u>Contact Us</u></b></p>
              <p>For support, queries, and feedback please write to us at smc2.0@wipro.com</p>
        </div>
      </div>
    );
  }
}
