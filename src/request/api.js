import { post } from "./http";
// 注册验证码
export const apiAddress = (p) => post("api/member/sendregverifycode", p);
