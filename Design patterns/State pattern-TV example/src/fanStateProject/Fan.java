package fanStateProject;

public class Fan implements FanState {

	private FanState fanState;

	public FanState getFanState() {
		return fanState;
	}

	public void setFanState(FanState fanState) {
		this.fanState = fanState;

	}

	@Override
	public void switchOnOffFan() {
		System.out.println("Current state Of Fan : " + fanState.getClass().getName());
		fanState.switchOnOffFan();

	}

}
