import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./_home.scss";

const Home = () => {
	return (
		<>
			<section className="home-page">
				<div className="chat-box">
					<h5 className="username">GotSteg</h5>
					<ul className="chat-area"></ul>
					<InputGroup className="mb-3" size="lg">
						<Form.Control
							placeholder="..."
							aria-label="message"
							aria-describedby="message-input"
						/>
						<Button variant="outline-light">Send</Button>
					</InputGroup>
				</div>
				<div className="home-aside">
					<div className="friends-box">
						<h5 className="aside-box-title">Friends</h5>
						<div className="friends-list">
							<ul className="friends">
								<li className="friend">
									<span>Joe Bloggs</span> <a href="#">Chat</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="online-box">
						<h5 className="aside-box-title">Online</h5>
						<div className="online-list">
							<ul className="online">
								<li className="friend">
									<span>Joe Bloggs</span>
									<a href="#">Chat</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
