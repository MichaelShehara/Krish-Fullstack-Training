package logistics;

public class AirTransport implements Transport {
 
    @Override
    public void load() {
        System.out.println("Loaded plane with freight");
    }
 
    @Override
    public void drive() {
        System.out.println("Plane departed with freight");
    } 

}
