package logistics;

public class CreateLogistics implements LogisticsFactory {
 
    public Transport createTransport(String type) {
        switch (type) {
            case "AIR":
                return new AirTransport();
            default:
                return new TruckTransport();
        }
    } 

}
