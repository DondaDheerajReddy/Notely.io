import "./Footer.css";

const date: Date = new Date();

function Footer() {
  return <footer>copyright &copy; {date.getFullYear()} DHEERAJ REDDY</footer>;
}

export default Footer;
