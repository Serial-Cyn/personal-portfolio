import Image from 'next/image';

export default function Blog() {
  return (
    <section className="px-6">
      <div>
        <h1 className="text-4xl lg:text-6xl font-bold">How it started</h1>
        <div className="text-base lg:text-2xl text-justify mt-4 leading-normal">
          <div>
            <p className="mb-4">
              Java Heroes is my first major project, and it all started with a
              simple idea. I wanted to create an educational game that would
              make learning cybersecurity in a fun and engaging way. This was a
              1 week project for the final requirement in my high school
              programming class.
            </p>
            
          </div>
          <p>
            I collaborated with my team members to brainstorm ideas and design
            the game mechanics. We decided to create a game where players would
            take on the role of a hero fighting against various types of viruses
            and malwares using programming concepts. The goal was to teach
            players about cybersecurity while keeping them entertained.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl lg:text-6xl font-bold mt-10">
          Development Journey
        </h1>
        <div className="text-base lg:text-2xl text-justify mt-4 leading-normal">
          <p className="mb-4">
            The development of Java Heroes took only a week, during which we
            went through several stages of planning&apos; designing, coding, and
            testing. We started by outlining the game&apos;s storyline and
            characters, followed by creating wireframes and mockups for the user
            interface. Next, we divided the coding tasks among team members,
            focusing on different aspects of the game such as gameplay
            mechanics, graphics, and sound effects.
          </p>
          <p className="mb-4">
            We only made 1 level to showcase the concept of the game without
            taking too much time. After coding, we conducted thorough testing to
            ensure the game was free of bugs and provided a smooth user
            experience.
          </p>
          <p>
            Java Heroes was praised by our teacher and classmates for its
            innovative approach to learning cybersecurity. The project not only
            helped us develop our programming skills but also taught us valuable
            lessons in teamwork and project management.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl lg:text-6xl font-bold mt-10">Future Plans</h1>
        <div className="text-base lg:text-2xl text-justify mt-4 leading-normal">
          <p className="mb-4">
            Looking ahead, I have ambitious plans for Java Heroes. I aim to
            expand the game by adding more levels, characters, and challenges to
            enhance the learning experience.
          </p>
          <p>
            However, I also recognize the importance of balancing my projects
            with my academic responsibilities. Therefore, I plan to work on Java
            Heroes during my free time, ensuring that it does not interfere with
            my studies. My goal is to create a comprehensive educational game
            that can be used by students worldwide to learn about cybersecurity
            in an engaging way.
          </p>
        </div>
      </div>
    </section>
  );
}
