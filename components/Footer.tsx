const Footer = () => (
  <footer style={styles.footerContainer}>
    <p>© {new Date().getFullYear()} AI Paraphraser. All rights reserved. Joshua Chinwendu</p>
  </footer>
);


const styles: Record<string, React.CSSProperties> = {
  footerContainer: {
    position: "fixed",
    width: "100%",
    bottom: "0",
    textAlign: "center",
    background: "#f1f1f1"
  
  }
};

export default Footer;