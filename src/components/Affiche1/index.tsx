import React from "react";
import Affiche from "../Affiche";

interface Props {
  className?: string;
  startpostingjobtext?: string;
  pricetext?: string;
  signupbutton?: string;
  usernametext?: string;
  emailtext?: string;
  jobhuntly?: string;
  dashboardtext?: string;
  messagestext?: string;
  companyprofiletext?: string;
  allapplicantstext?: string;
  joblistingtext?: string;
  settingstext?: string;
  settingstext1?: string;
  helptext?: string;
  postajobbutton?: string;
  greetingscolumn?: string;
  hereiswhats?: string;
  jul1925button?: string;
  companyvisitorstext?: string;
  totalvisitorstext?: string;
  visitorsfrom?: string;
  visitors?: string;
  visitorstext?: string;
  montext?: string;
  tuetext?: string;
  wedtext?: string;
  thutext?: string;
  fritext?: string;
  sattext?: string;
  suntext?: string;
  
}

export default function Affiche1({
  startpostingjobtext = "Start posting jobs today",
  pricetext = "Start posting jobs for only $10.",
  signupbutton = "Sign Up For Free",
  usernametext = "Maria Kelly",
  emailtext = "mariakelly@email.com",
  jobhuntly = "JobHuntly",
  dashboardtext = "Dashboard",
  messagestext = "Messages",
  companyprofiletext = "Company Profile",
  allapplicantstext = "All Applicants",
  joblistingtext = "Job Listing",
  settingstext = "SETTINGS",
  settingstext1 = "Settings",
  helptext = "Help",
  postajobbutton = "Post a job",
  greetingscolumn = "Good morning, Maria",
  hereiswhats = "Here is what’s happening with your job listings from July 19 - July 25.",
  jul1925button = "Jul 19 - Jul 25",
  companyvisitorstext = "Company Visitors",
  totalvisitorstext = "21,457",
  visitorsfrom = "Visitors from July 19 - July 25",
  visitors = "Visitors",
  visitorstext = "5,879",
  montext = "Mon",
  tuetext = "Tue",
  wedtext = "Wed",
  thutext = "Thu",
  fritext = "Fri",
  sattext = "Sat",
  suntext = "Sun",
  ...props
}: Props) {
  return (
    <div {...props}>
      <Affiche className="container-xs flex h-[414px] items-center justify-center bg-[url(/public/images/img_cta_section.svg)] bg-cover bg-no-repeat px-14 pt-[70px] md:h-auto md:p-5 md:px-5 md:pt-5" />
    </div>
  );
}
