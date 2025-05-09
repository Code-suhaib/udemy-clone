export default function Footer() {
    return(
        
            <>
               <footer className="mt-5 py-4 border-top text-muted">
        <div className="row">
          <div className="col-md-3">
            <h5>EduPlatform</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-muted">About Us</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Careers</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Blog</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Top Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-muted">Development</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Business</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Design</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Marketing</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-muted">Help Center</a></li>
              <li><a href="#" className="text-decoration-none text-muted">FAQs</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Terms of Service</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Stay Connected</h5>
            <p>Subscribe to our newsletter to get the latest updates.</p>
            <input type="email" className="form-control mb-2" placeholder="Enter your email" />
            <button className="btn btn-primary btn-sm">Subscribe</button>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} EduPlatform. All rights reserved.</p>
        </div>
      </footer>
      </>
        
    );
}