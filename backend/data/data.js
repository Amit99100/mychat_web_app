const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Sunil Shinde",
        email: "john@example.com",
      },
      {
        name: "Amit",
        email: "Amit@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Sunil Shinde",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Amit",
        email: "Amit@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Anthony",
        email: "anthony@example.com",
      },
      {
        name: "Amit",
        email: "Amit@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Anthony",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Sunil Shinde",
        email: "jon@example.com",
      },
      {
        name: "Amit",
        email: "Amit@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Jane Doe",
        email: "jane@example.com",
      },
      {
        name: "Amit",
        email: "Amit@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Jane Doe",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Sunil Shinde",
        email: "jon@example.com",
      },
      {
        name: "Amit",
        email: "Amit@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

// This is how we can export our data 
module.exports = chats;