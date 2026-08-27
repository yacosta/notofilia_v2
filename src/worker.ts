import { handleCommentsRequest, type CommentsEnv } from './worker/comments';

export default {
  async fetch(request: Request, env: CommentsEnv): Promise<Response> {
    return handleCommentsRequest(request, env);
  },
};
