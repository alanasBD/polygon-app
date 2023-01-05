import "./FooterBottom.css";
function FooterBottom() {
  return (
    <div className="container-fluid d-flex footer-bottom">
      <div className="col-md-6 footer-bottom-left">
        <p>&copy; 2023 ABCD Limited</p>
      </div>
      <div className="col-md-6 text-end footer-bottom-right">
        <p> Privacy Policy | Legal Disclaimer | Terms & Condition</p>
      </div>
    </div>
  );
}

export default FooterBottom;
