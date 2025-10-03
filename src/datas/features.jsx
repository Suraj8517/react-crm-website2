import { MdManageAccounts, MdPayments } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { TbAutomation } from "react-icons/tb";
import { IoIosChatbubbles } from "react-icons/io";
import { CgInsights } from "react-icons/cg";

const features = [
  {
    title: "Lead Management",
    description:
      "Capture inquiries from trial signups, social media, or referrals, and convert them into paying members with organized tracking.",
    icon: <MdManageAccounts className="text-white text-2xl" />,
  },
  {
    title: "Client Management",
    description:
      "Keep member profiles updated with workout plans, diet schedules, and progress records all in one place.",
    icon: <FaUsers className="text-white text-2xl" />,
  },
  
  {
    title: "Client Progress Tracking",
    description:
      "Track member weight, BMI, workouts, and meal plan adherence with clear dashboards and reports.",
    icon: <GiProgression className="text-white text-2xl" />,
  },
  {
    title: "Payment Tracking",
    description:
      "Manage membership fees, dietitian packages, and renewals with automated invoices and reminders.",
    icon: <MdPayments className="text-white text-2xl" />,
  },
  {
    title: "Workflow Automation",
    description:
      "Automate trial follow-ups, class reminders, and diet check-ins to save time and boost engagement.",
    icon: <TbAutomation className="text-white text-2xl" />,
  },
  {
    title: "Communication Tools",
    description:
      "Stay connected with clients via chat, email, or SMS for quick updates on diet, workouts, or offers.",
    icon: <IoIosChatbubbles className="text-white text-2xl" />,
  },
  {
    title: "Finance Management",
    description:
      "Easily manage revenues, expenses, and memberships with clear financial reports and insights for better decision making.",
    icon: <MdPayments className="text-white text-2xl" />,
  },
  {
    title: "Real-time Insights",
    description:
      "Get live visibility into membership status, active plans, and financial performance — anytime, anywhere.",
    icon: <CgInsights className="text-white text-2xl" />,
  },
];


export default features;

export const links = [
  { href: "#features", label: "Features" },
  { href: "#for-whom", label: "For Whom" },
  { href: "#faq", label: "FAQ's" },
];

export const testimonials = [
  {
    text: "With EliMax, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.",
    name: "Jaquon Hart",
    role: "Trainer, Hypebeast",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "The platform has streamlined our workflows and improved efficiency. It’s user-friendly and very reliable.",
    name: "Sarah Lee",
    role: "Nutritionist, Health Hub",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    text: "Excellent customer support and powerful tools. This has helped us scale our operations without hassle.",
    name: "Michael Chen",
    role: "COO, TechMart",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
  },
];
