import { Divider, Avatar } from "antd";
const Author = () => {
  return (
    <div>
      <div className="author-div comm-box">
        <Avatar
          size={100}
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570731028860&di=71ba4e4049111451e24284e496e16bd3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F04%2F20161104012334_sruKx.jpeg"
        />
      </div>
      <div className="author-introduction">
        光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
        <Divider>社交账号</Divider>
        <Avatar size={28} icon="github" className="account" />
        <Avatar size={28} icon="qq" className="account" />
        <Avatar size={28} icon="wechat" className="account" />
      </div>
    </div>
  );
};

export default Author;
