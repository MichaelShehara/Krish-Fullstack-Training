package fanStateProject;

public class StateDesignPattern {
	public static void main(String[] args) {
		Fan fan = new Fan();
		FanState fanSwitchOnState = new FanSwitchOnState();
		FanState fanSwitchOffState = new FanSwitchOffState();

		fan.setFanState(fanSwitchOnState);
		fan.switchOnOffFan();

		fan.setFanState(fanSwitchOffState);
		fan.switchOnOffFan();
	}
}
