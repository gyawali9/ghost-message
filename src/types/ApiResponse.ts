import { Message } from "@/model/User";

export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptingingMessages?: boolean;
  messages?: Array<Message>;
  //   data?: T;
  //   error?: string;
}
