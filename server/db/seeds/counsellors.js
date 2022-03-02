exports.seed = async function (knex) {
  await knex('counsellors').del()
  await knex('counsellors').insert([
    {id: 1, name: 'Courtney Brown', pronouns: 'She/Her', speciality: 'LGBTQI+', photo: './images/counsellors/COU.jpg', hours: 'Monday to Wednesday 9 am- 2pm', biography: `Courtney offers a ‘pluralistic’ approach, working in partnership with clients as the experts in their own lives. Courtney has particular experience with self-compassion and mindfulness practices and has strong interests in neuropsychology and attachment theory. She has previously worked in hospital, palliative care, community and university settings.`},

    {id: 2, name: 'Christine Stewart', pronouns: 'They/Them', speciality: 'Job Support', photo: './images/counsellors/CHR.jpg', hours: 'Monday to Friday 9am - 3pm', biography: `Christine has been a job support counsellor for many years now, and is always ready to help you find a job if you are struggling. They walk you through the process to be work-ready, and connect you with employers. There are also various training and development opportunities that you can access when you sign up for a session with them.`},

    {id: 3, name: 'Cujo Burton', pronouns: 'They/Them', speciality: 'Trauma & Grief', photo: './images/counsellors/CUJ.jpg', hours: 'Monday to Friday 9am - 2pm', biography: `Cujo works with people in a non-judgemental, person-centred way exploring their responses to life issues. They work "existentially" placing peoples' values, beliefs, and resourcefulness at the centre of the work. Drawing from counselling methods like art therapy, psychodrama, cognitive behavioural therapy, Te Wheke and focusing their approach is tailored to suit needs.`},

    {id: 4, name: 'Natalie Sherwood', pronouns: 'She/they', speciality: 'Te Whare Tapa Whā', photo: './images/counsellors/NAT.jpg', hours: 'Tuesday to Sunday 12pm - 7pm', biography: `Natalie has a unique set of counselling skills, developed over 25 years, combining narrative therapy, cognitive behaviour therapy, mindfulness meditation, emotional agility and appreciative inquiry. Natalie also combines this with the practice of the latest research into happiness, trauma recovery, resilience, and positive psychology.`},

    {id: 5, name: 'Pauline Gertrude', pronouns: 'They/Them', speciality: 'Relationships', photo: './images/counsellors/PAU.jpg', hours: 'Monday to Thursday 9am - 12pm', biography: `Providing counselling services for individuals and couples Pauline's therapy is a non-judgemental way to assess your situation, see past limiting patterns and constructively move toward a desired outcome. A range of approaches are available, including emotionally focussed therapy, and cognitive behavioural therapy`},

    {id: 6, name: 'Peter Plum', pronouns: 'He/Him', speciality: 'Addiction', photo: './images/counsellors/PET.jpg', hours: 'Thursdays and Sundays 9am - 1pm', biography: `Peter works with a variety of approaches to offer clients different options and ways to process through their difficulties. He enjoys making the counselling process as creative as possible by offering clients the use of drawing or working with objects or cards. He has been in the practice for over 5 years now, and has helped many people overcome addiction.`},

    {id: 7, name: 'Tyrone Baxter', pronouns: 'They/He', speciality: 'Anxiety & Stress', photo: './images/counsellors/TYR.jpg', hours: 'Thursdays 9am - 3pm', biography: `Tyrone specialises in working with Māori whanau, including rangatahi and tamariki. She has particular skills and knowledge related to working with those affected by violence and abuse and those struggling with their cultural identity. They also work with people presenting with a range of mental health issues.`},

    {id: 8, name: 'Jasmine Jones', pronouns: 'She/Her', speciality: 'Relationships', photo: './images/counsellors/JAS.jpg', hours: 'Monday to Friday 9am - 4 pm', biography: `Jasmine specialises in psychotherapy. She has helped couples of all types to explore, recognize, and resolve conflicts in an effort to improve their relationships and interactions. She is also an active speaker in many relationship workshops, and has published various books.`},

    {id: 9, name: 'Bruce Patterson', pronouns: 'He/Him', speciality: 'Anxiety & Stress', photo: './images/counsellors/BRW.jpg', hours: 'Mondays 6pm - 12 pm', biography: `Bruce provides a specialised programme called 'Stress Buster,' in helping individuals come out victorious in their journey with anxiety and stress. He has been actively facilitating workshops and programmes in this area for many years now, and has been recognised by the Psychological Associations around the world.`},

    {id: 10, name: 'Juan Dela Cruz', pronouns: 'He/Him', speciality: 'Job Support', photo: './images/counsellors/JDC.jpg', hours: 'Flexi hours currently on offer', biography: `Juan specialises in providing assistance for people struggling to find a job. He provides an individualistic approach to helping individuals discover their strengths and potentials, and use it to their advantage. Juan will help you gain confidence in going through the process of job application, and make sure you will be sucessful. He comes highly recommended.`},

    {id: 11, name: 'Maybel Zeng', pronouns: 'They/Them', speciality: 'Addiction', photo: './images/counsellors/MAZ.jpg', hours: 'Monday to Wednesday 10am - 2pm', biography: `Maybel has done years of research in the area of addiction, and how the principle of replacement could be help a person come up with strategies in battling this issue. Maybel is very hands-on in doing a thorough diagnosis and therapy plan for clients. They also facilitate group therapy which has been found effective in treating these kind of issues.`},

    {id: 12, name: 'Amara Keita', pronouns: 'She/Her', speciality: 'Trauma & Grief', photo: './images/counsellors/AMK.jpg', hours: 'Monday to Thursday 8am - 3pm', biography: `Amara has developed a coping strategy programme in dealing with grief and traumatic experiences. She believes in the power of self-discovery, which is part of the programme that she offers. She employes a very person-centred and flexible approach in coming up with customised therapy programme, to suit the needs of the client.`},
  ]);
};
