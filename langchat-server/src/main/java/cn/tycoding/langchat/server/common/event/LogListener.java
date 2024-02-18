package cn.tycoding.langchat.server.common.event;

import cn.tycoding.langchat.server.entity.LcLog;
import cn.tycoding.langchat.server.service.LogService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.event.EventListener;
import org.springframework.core.annotation.Order;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

/**
 * @author tycoding
 * @since 2023/10/19
 */
@Component
@RequiredArgsConstructor
public class LogListener {

    private final LogService logService;

    @Async
    @Order
    @EventListener(LogEvent.class)
    public void handler(LogEvent event) {
        LcLog lcLog = (LcLog) event.getSource();
        logService.add(lcLog);
    }
}
