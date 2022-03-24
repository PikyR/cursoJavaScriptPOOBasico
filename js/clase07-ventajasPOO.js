// Ejemplo
// Objetos literales
const juanito = {
  name: "Juan",
  userName: "JuanRR",
  points: 100,

  socialMedia: {
    twitter: "cosoJuan",
    instagram: "cosoJuan",
    facebook: undefined,
  },

  approvedCourses: [
    "Curso coso 1",
    "Curso coso 2",
  ],

  learningPaths: [
    {
      name: "Escuela uno",
      courses: [
        "Curso coso 1",
        "Curso coso 2",
      ],
    },

    {
      name: "Escuela de Videojuegos",
      courses: [
        "Curso A - EVJ",
        "Curso B - EVJ",
        "Curso C - EVJ",
      ],
    },
  ]
}; //Fin

// Clases
class Lesson {
  constructor({
    title,
  }) {
    this.title = title
  }
}

class Course {
  constructor({
    name,
    lessons = [],
  }) {
    this.name = name;
    this.lessons = lessons;
  }
}

const cursoProgBasica = new Course({
  name: "Curso de programacón básica",
});

const cursoGIT = new Course({
  name: "Curso de GIT",
});

const cursoData = new Course({
  name: "Curso de Data",
});



class LearningPath {
  constructor ({
    name, 
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }

  addCourse(newCourse) {
    this.courses.push(newCourse);
  }
}

const escWeb = new LearningPath({
  name: "Escuela de desarrolo web",
  courses: [
    cursoGIT,
    "Curso de FlexBox",
  ]
});

const escData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoData,
    "Curso de Science",
    cursoProgBasica,
  ]
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };    
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

// Primera instancia de la clase Student
const Jonh = new Student({
  name: "Jony",
  username: "JonyXD",
  email: "JonyXD@xd.com",
  instagram: "Jony_XD",
  learningPaths: [
    escData,
    escWeb,
  ],
});

// Segunda instancia de Student
const Mic = new Student({
  name: "Mac",
  username: "macXD",
  email: "mac@xd.com",
  twitter: "MACC",
  learningPaths: [
    escWeb,
  ],
});
