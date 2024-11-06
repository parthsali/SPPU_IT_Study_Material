import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <nav>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <Link href="/">Home</Link>
          </li>
          <li style={listItemStyle}>
            <Link href="/about">About</Link>
          </li>
          <li style={listItemStyle}>
            <Link href="/contact">Contact</Link>
          </li>
          <li style={listItemStyle}>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li style={listItemStyle}>
            <Link href="/terms">Terms of Service</Link>
          </li>
          <li style={listItemStyle}>
            <Link href="/support">Support</Link>
          </li>
          <li style={listItemStyle}>
            <Link href="/faqs">FAQs</Link>
          </li>
        </ul>
      </nav>
      <p style={copyStyle}>
        &copy; {new Date().getFullYear()} SPPU IT Study Material. All rights
        reserved.
      </p>
    </footer>
  );
};

// Styling
const footerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "20px",
  borderTop: "1px solid #777",
  marginTop: "20px",
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: "0 0 10px 0",
  display: "flex",
  justifyContent: "center",
};

const listItemStyle: React.CSSProperties = {
  margin: "0 15px",
  fontSize: "14px",
  color: "#777",
};

const copyStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#777",
};

export default Footer;
