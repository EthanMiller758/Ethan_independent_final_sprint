import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <main>
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message in this box" />
            <button className="btn">Submit</button>
        </form>
        </main>
    </div>
  );
};

export default Form;