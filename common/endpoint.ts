export default class ENDPONTAPI {
  static LOGIN = "/login";
  static REGISTER = "/register";
  static LOGOUT = "/logout";

  static UPDATE_USER = "/update-user";
  static LOAD_USER_BY_ID = "/load-user-by-id";
  static CHANGE_PASSWORD = "/change-password";

  static UPLOAD = "/upload";

  static GET_USER_FROM_TOKEN = "/get-user-from-token";


  // category 
  static GET_CATEGORYS_BY_STATUS = '/category/load-category-by-status'
  static UPDATE_CATEGORY = '/category/update-category'

  // course
  static GET_COURSES_BY_STATUS = '/course/load-course-by-status'
  static UPDATE_COURSE = '/course/update-course'

  // lesson
  static GET_LESSONS_BY_STATUS = '/lesson/load-lesson-by-status'
  static UPDATE_LESSON = '/lesson/update-lesson'

  // question
  static GET_QUESTIONS_BY_STATUS = '/question/load-question-by-status'
  static UPDATE_QUESTION = '/question/update-question'

  // tag
  static GET_TAGS_BY_STATUS = '/tag/load-tag-by-status'
  static UPDATE_TAGS = '/tag/update-tag'

  // topic
  static GET_TOPICS_BY_STATUS = '/topic/load-topic-by-status'
  static UPDATE_TOPIC = '/topic/update-topic'
}
