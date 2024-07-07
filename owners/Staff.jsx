
const Staff = ({ staffMembers }) => {
  return (
    <div className="person-container">
      {staffMembers.map((member, index) => (
        <div key={index} className="person">
          <img src={member.imagen} alt=""/>
          <div className="info">
            <h3>Person Two</h3>
            <p>Profession</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolor similique quia pariatur ex laudantium voluptas non aut </p>
            <div className="social-media">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Staff;

