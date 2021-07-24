import asyncHandler from "express-async-handler";
import { tutors } from "../tution.js";

const getTutors = asyncHandler(async (req, res) => {
  const pageSize = 12;

  const page = Number(req.query.pageNumber) || 1;

  const tutorType = req.query.tutorType || "Platinum";

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = tutors.length;

  const selectedTutors = tutors.filter((t) => {
    return t.type === tutorType;
  });
  
  const pages = Math.ceil(selectedTutors.length / pageSize);
  const filteredTutors = selectedTutors.filter((tutor) => {
    return (
      selectedTutors.indexOf(tutor) >= (page - 1) * pageSize &&
      selectedTutors.indexOf(tutor) <= page * pageSize - 1
    );
  });

  res.json({ filteredTutors, page, pages, tutorType });
});

export { getTutors };
