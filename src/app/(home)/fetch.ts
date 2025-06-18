import { IOverviewData } from "./_types/overview-cards";

export async function getOverviewData(): Promise<IOverviewData> {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    "s-2210": {
      value: 2,
      percentual: 1,
    },
    "s-2220": {
      value: 4,
      percentual: 0.019,
    },
    "s-2240": {
      value: 39,
      percentual: 0.124,
    },
    "s-3000": {
      value: 0,
    },
  };
}

export async function getChatsData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      name: "Jacob Jones",
      profile: "/images/user/user-01.png",
      isActive: true,
      lastMessage: {
        content: "See you tomorrow at the meeting!",
        type: "text",
        timestamp: "2024-12-19T14:30:00Z",
        isRead: false,
      },
      unreadCount: 3,
    },
    {
      name: "Wilium Smith",
      profile: "/images/user/user-03.png",
      isActive: true,
      lastMessage: {
        content: "Thanks for the update",
        type: "text",
        timestamp: "2024-12-19T10:15:00Z",
        isRead: true,
      },
      unreadCount: 0,
    },
    {
      name: "Johurul Haque",
      profile: "/images/user/user-04.png",
      isActive: false,
      lastMessage: {
        content: "What's up?",
        type: "text",
        timestamp: "2024-12-19T10:15:00Z",
        isRead: true,
      },
      unreadCount: 0,
    },
    {
      name: "M. Chowdhury",
      profile: "/images/user/user-05.png",
      isActive: false,
      lastMessage: {
        content: "Where are you now?",
        type: "text",
        timestamp: "2024-12-19T10:15:00Z",
        isRead: true,
      },
      unreadCount: 2,
    },
    {
      name: "Akagami",
      profile: "/images/user/user-07.png",
      isActive: false,
      lastMessage: {
        content: "Hey, how are you?",
        type: "text",
        timestamp: "2024-12-19T10:15:00Z",
        isRead: true,
      },
      unreadCount: 0,
    },
  ];
}

export async function getEmployers() {
  return [
    { label: "Employer A", value: "001" },
    { label: "Employer B", value: "002" },
    { label: "Employer C", value: "003" },
    { label: "Employer D", value: "004" },
    { label: "Employer E", value: "005" },
  ];
}

export async function getUnitsAndOutsourcingByEmployer(employerId?: string) {
  const data = [
    {
      id: "unit-101",
      name: "Unidade Central",
      type: "unit",
      employerId: "001",
      address: "Rua Principal, 123",
      employees: 120,
    },
    {
      id: "unit-102",
      name: "Unidade Secundária",
      type: "unit",
      employerId: "002",
      address: "Avenida Secundária, 456",
      employees: 80,
    },
    {
      id: "outsourcing-201",
      name: "Terceirizada Alpha",
      type: "outsourcing",
      employerId: "001",
      address: "Rua das Terceirizadas, 789",
      employees: 40,
    },
    {
      id: "outsourcing-202",
      name: "Terceirizada Beta",
      type: "outsourcing",
      employerId: "003",
      address: "Avenida Beta, 321",
      employees: 25,
    },
  ];

  return employerId
    ? data.reduce((prevValue, currValue) => {
        if (currValue.employerId === employerId) {
          return prevValue.concat({
            label: currValue.name,
            value: currValue.id,
          });
        }

        return prevValue;
      }, [] as any[])
    : [];
}
