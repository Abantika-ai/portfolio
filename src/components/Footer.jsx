import { profile } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
      </div>
    </footer>
  );
}
