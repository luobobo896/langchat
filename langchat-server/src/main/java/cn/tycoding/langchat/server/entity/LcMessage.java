package cn.tycoding.langchat.server.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
import java.util.Date;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * @author tycoding
 * @since 2023/8/4
 */
@Data
@Accessors(chain = true)
public class LcMessage implements Serializable {
    private static final long serialVersionUID = -19545329638997333L;

    /**
     * 主键
     */
    @TableId(type = IdType.ASSIGN_UUID)
    private String id;

    /**
     * 消息的ID，此ID应该由前端生成并传递给后端
     */
    private String promptId;

    /**
     * 要回复消息的promptId
     */
    private String parentRefId;

    /**
     * 会话ID
     */
    private String conversationId;

    /**
     * 应用ID
     */
    private String appId;

    /**
     * 角色，user、assistant、system
     */
    private String role;

    /**
     * 内容
     */
    private String content;

    /**
     * 创建时间
     */
    private Date createTime;

}

