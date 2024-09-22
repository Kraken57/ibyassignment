// eslint-disable-next-line @typescript-eslint/no-unused-vars
type GroupChatType = {
  id: string;
  user_id: number;
  title: string;
  passcode: string;
  created_at: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type GroupChatUserType = {
  id: number;
  name: string;
  group_id: string;
  created_at: string;
  isOnline?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type MessageType = {
  id: string;
  message: string;
  group_id: string;
  name: string;
  created_at: string;
};
