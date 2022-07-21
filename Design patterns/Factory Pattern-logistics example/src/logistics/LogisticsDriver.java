package logistics;

public class LogisticsDriver {
	public static void main(String[] args) {
        CreateLogistics cl = new CreateLogistics();
        System.out.println("Handling Land Logistics");
        Transport truck = cl.createTransport("LAND");
        truck.load();
        truck.drive();
        System.out.println("Handling Air Logistics");
        Transport plane = cl.createTransport("AIR");
        plane.load();
        plane.drive();
    }

}
