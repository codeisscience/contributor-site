---
slug: GSoC-22-Building-the-Journal-Policy-Tracker
title: GSoC 2022- Building the Journal Policy Tracker
authors:
  name: Padmaja Bhol
  title: GSoC'22 Mentee
  url: https://github.com/padmajabhol
  image_url: https://avatars.githubusercontent.com/u/75530516?s=400&u=907f9d2566755d63a42460097262dfbb5ef829c0&v=4
tags: [gsoc, opensource, graphql, journals]
---

## Project Description 📌

Scientific code needs to be open source in order to be useful and peer-reviewed. Code-is-Science aims to help researchers find journals that require open source code easily. Through Journal Policy Tracker, users can submit journals for code-sharing policy tracking.
As a part of Google Summer of Code 2022, I got an opportunity to work on Journal Policy Tracker under Open Bioinformatics Foundation. OBF is an umbrella organization that supports small-sized organizations participating in various mentorship initiatives.

### How the project is supposed to work

The project should have auth components to log in/register a user, and then the particular user can add journal policies stored in a database. The user should also be able to edit and delete a specific journal they created at any time. The project should also have a page displaying all journals and a separate component to display an individual journal.
Particularly for the auth component, there should be a method to verify the user and prevent spam. Along with this, there should be a component to display user roles- if a user logged in is an admin or not.

### Tech Stacks Used 

For the frontend library, we decided to go with React.js because of its flexibility and because we could use it to build quality user interfaces.

| Purpose                                    | Tools and Technologies used |
| ------------------------------------------------ | --------------------------- |
| Frontend framework  | Reactjs                       |
| Designing                                        | Figma                       |                      |
| Package Manager                                   | Yarn                  |
| CSS Library                                   | Styled Components, Vanilla CSS
| Graphql Client                                        | Apollo Client                      |
| Testing                                          | Cypress                         |
| State-management | useReducer |

## Community Bonding 🫶🏽

### Mentors & Co-Mentee 

I can't thank my project mentors, Yo Yahudi and Isaac Miti, who helped me navigate through these three months. They were understandable throughout the period, given that I was a full-time university student during my term.

Apart from this, I could also like to thank my co-mentee, Devesh, who helped me a lot, especially during the backend integration, since this was my first time working with a GraphQL backend, and I had a lot of surprises on the way 👀.

### Community Bonding Period

I took the first few days to set up the project, create a separate branch on the main repository to push all of my commits and most importantly, design all the components that I had to develop during GSoC.

Subsequently, I got on a call with my co-mentee where we discussed everything we had on our mind regarding how we could shape the project.

## Phase 1

#### Restructuring

For the first task, I restructured the project directory as given below:

```

└── journal-policy-tracker-frontend/
    ├── .github/
         ├── issue/pr templates
    ├── src/
         ├── config
              ├── website content
         ├── components (separate files for each component, i.e authenticate page, 
             Add Journal, Edit Journal, Journals, etc. Shared components i.e buttons, layouts.)
         ├── pages
              ├──index.js page and Home page
         ├── context (containing useContext and useReducer hooks as well as the states)
         ├── graphql (Containing all mutations and queries)
         ├── utils
         ├── App.js
         ├── css files
 
```

I then moved all of our image assets to Cloudinary instead of storing them in the project directory. This not only helps us to reduce the size of the repository but also helps us to optimize our images, and in general, a good industry practice.

Then, I removed components built with react-bootstrap and converted them to just vanilla CSS, as mentioned by my mentors, so that we could customize as much as possible while keeping the list of dependencies low. This took some time, and we mostly ended up with new designs for our footer, navbar, and landing pages.

#### Auth components

The next week was spent building the auth components, that consisted of signup and a login pages with all the validation checks!

Sign Up:
![Sign Up](https://user-images.githubusercontent.com/75530516/189544628-a65c22fc-650b-44ef-881e-afd87c1dfda7.png)

Log In:
![Log In](https://user-images.githubusercontent.com/75530516/189544634-7a1f57ff-4ec8-4e96-8f5a-dfac3e02caff.png)

#### JSON server and the Journal List component, migrating Yarn.

I then built a component to display the entire list of journals stored in the database. I also used a JSON server for the mock backend that stored the dummy data. Previously, we used NPM as the package manager, but I suggested shifting to Yarn since the backend had used Yarn, and it has quite some reputation for being a better package manager.
![Journal List](https://user-images.githubusercontent.com/75530516/189544665-369654c1-dc1c-4574-b051-9ca9c7bab710.png)

#### Policy details component

Next, I worked on making a component that could fetch and display all the policy details when clicking on a particular journal. This involved researching the various policies that come with open source scientific journals. We currently have eight fields.

1. First Year
2. Policy Title
3. Policy Type
4. Enforced
5. Data Availability Statement Published
6. Data Peer Reviewed
7. Data Shared
8. Enforced Evidence
![Details](https://user-images.githubusercontent.com/75530516/189544671-f76c6b4d-c5aa-4a4d-adc6-8d30757d800f.png)

#### Add Journal Component

Developed a component to help users add a journal and its policies to the database.
![Add Journal](https://user-images.githubusercontent.com/75530516/189544851-b5a5254b-2b46-4d4d-bc49-97e16c629427.png)

#### Crud operations, searbar

Developed components to edit and delete a particular journal. Made a searchbar for the Journal List page that could could search for a journal either by its title or ISSN number.

PRs: 
1. https://github.com/codeisscience/journal-policy-tracker-frontend/pull/163
2. https://github.com/codeisscience/journal-policy-tracker-frontend/pull/165
3. https://github.com/codeisscience/journal-policy-tracker-frontend/pull/168
4. https://github.com/codeisscience/journal-policy-tracker-frontend/pull/170
5. https://github.com/codeisscience/journal-policy-tracker-frontend/pull/173
6. https://github.com/codeisscience/journal-policy-tracker-frontend/pull/175
7. https://github.com/codeisscience/journal-policy-tracker-frontend/pull/177
8. https://github.com/codeisscience/journal-policy-tracker-frontend/pull/178
9. https://github.com/codeisscience/journal-policy-tracker-frontend/pull/179
10. https://github.com/codeisscience/journal-policy-tracker-frontend/pull/186

## Phase 2

#### State Management

A heavy package like Redux wasn't essential, and neither is prop drilling and having multiple useStates a good industry practice. To solve this problem, I took the help of useContext and useReducer hooks to set up global state management. At the end of the day, react is a state management library 😉.

#### Modularization

Created common components like layouts, texts, and buttons that could be used everywhere. This practice can accelerate the development process and is generally a good practice.

#### GraphQL integration!

After the backend was ready for integration, I deleted the mock JSON server and changed how things worked in the app. For a REST API, you mostly need a single call to fetch the data for all your components, i.e., the Journal List and the Journal Policy Detail. But in that process, you end up over fetching data from the API that you might not need to render on the web page. So what do we do? For this particular reason, my mentors had decided to move to GraphQL.
GraphQL gives you precisely what you're asking for when you query with a single POST/GET request. But that also meant we had to make separate calls for separate components.

Query for Journal List:
```
 query GetAllJournals($currentPageNumber: Int!, $limitValue: Int!) {
  getAllJournals(currentPageNumber: $currentPageNumber, limitValue: $limitValue) {
   journals {
    id
    title
    url
    issn
    domainName
    createdAt
    updatedAt
    createdBy
    }
   totalJournals
   }
 }
```

Query for Journal Policy Details: 

```
  query GetJournalByISSN($issn: String!) {
   getJournalByISSN(issn: $issn) {
    id
    title
    url
    issn
    domainName
     policies {
      title
      firstYear
      lastYear
      policyType
      isDataAvailabilityStatementPublished
      isDataShared
      isDataPeerReviewed
      enforced
      enforcedEvidence
    }
    createdAt
    updatedAt
    createdBy
   }
  }
```

The entire process took quite some time and was quite challenging, but I completed it with my fellow co-mentee's help!

#### User profile and log out component

Created a component to display the user logged in and a button to log out and delete the cookie.
![User Profile](https://user-images.githubusercontent.com/75530516/189545003-51274293-68f7-4dde-8fc8-20a6657c7eb9.png)

PRs:
1. https://github.com/codeisscience/journal-policy-tracker-frontend/pull/189
2. https://github.com/codeisscience/journal-policy-tracker-frontend/pull/190
3. https://github.com/codeisscience/journal-policy-tracker-frontend/pull/191
4. https://github.com/codeisscience/journal-policy-tracker-frontend/pull/192
5. https://github.com/codeisscience/journal-policy-tracker-frontend/pull/193
6. https://github.com/codeisscience/journal-policy-tracker-frontend/pull/194

## The next steps:

Though we could deliver almost all of the things we had initially proposed, there are still a few things that can be implemented to futher improve the project. This may include improving the authentication, code optimization, UI-UX enhancements, and a much-needed admin dashboard. We are also planning to onboard new contributors to work on beginner-friendly issues.

## Final Thoughts

My experience throughout the mentorship was amazing, and I can't thank my mentors enough for making it all happen. I got to learn a lot of things, and it was challenging to manage full-time college during my GSoC term. I'm delighted to be a part of the Code Is Science team and will be contributing in the future too.
