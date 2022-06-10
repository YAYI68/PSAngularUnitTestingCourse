import { MessageService } from "../message.service";

describe("MessageService",()=>{
    let service: MessageService;

    it('should be empty if length is 0',()=>{
        service = new MessageService();

        expect(service.messages.length).toBe(0)
    })
    it('should contain 1 item if length is 1',()=>{
        service = new MessageService();
        service.add("message");
        expect(service.messages.length).toBe(1)
    })

    it('should be empty after clear',()=>{
        service = new MessageService();
        service.add("message");
        service.clear()
        expect(service.messages.length).toBe(0)
    })

})