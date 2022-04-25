import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import eventInterface from "../../../@shared/event/event.interface";

export default class EnviaConsoleLogHandler
    implements EventHandlerInterface {
    handle(event: eventInterface): void {
        console.log(`Endereço do cliente: ${event.eventData.id}, ${event.eventData.name} alterado para: ${event.eventData.Address.toString()}`);
    }
}