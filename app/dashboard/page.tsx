import { Button } from "@/components/ui/Button";

export default function Page() {
  return (
    <div className="custom-dashboard-page">
      <h2>Dashboard Page</h2>
      <section>
        <h3>Changing Animation Delay</h3>
        <Button className="m-1 animate-bounce delay-150 duration-300">
          Button A
        </Button>
        <Button className="m-1 animate-bounce delay-300 duration-300">
          Button B
        </Button>
        <Button className="m-1 animate-bounce delay-700 duration-300">
          Button C
        </Button>
      </section>

      <section>
        <h3>Changing Animation Direction</h3>
        <Button className="m-1 animate-bounce direction-normal delay-700 duration-700 repeat-infinite">
          Button A
        </Button>
        <Button className="m-1 animate-bounce direction-reverse delay-700 duration-700 repeat-infinite">
          Button B
        </Button>
        <Button className="m-1 animate-bounce direction-alternate delay-700 duration-700 repeat-infinite">
          Button C
        </Button>
        <Button className="m-1 animate-bounce direction-alternate-reverse delay-700 duration-700 repeat-infinite">
          Button D
        </Button>
      </section>

      <section>
        <h3>Changing Animation Duration</h3>
        <Button className="m-1 animate-bounce delay-700 duration-150 repeat-infinite">
          Button A
        </Button>
        <Button className="m-1 animate-bounce delay-700 duration-300 repeat-infinite">
          Button B
        </Button>
        <Button className="m-1 animate-bounce delay-700 duration-700 repeat-infinite">
          Button C
        </Button>
      </section>

      <section>
        <h3>Changing Animation Fill Mode</h3>
        <Button className="m-1 animate-bounce fill-mode-none delay-700 duration-700 repeat-infinite">
          Button A
        </Button>
        <Button className="m-1 animate-bounce fill-mode-forwards delay-700 duration-700 repeat-infinite">
          Button B
        </Button>
        <Button className="m-1 animate-bounce fill-mode-backwards delay-700 duration-700 repeat-infinite">
          Button C
        </Button>
        <Button className="m-1 animate-bounce fill-mode-both delay-700 duration-700 repeat-infinite">
          Button D
        </Button>
      </section>

      <section>
        <h3>Changing Animation Iteration Count</h3>
        <Button className="m-1 animate-bounce repeat-0">Button A</Button>
        <Button className="m-1 animate-bounce repeat-1">Button B</Button>
        <Button className="m-1 animate-bounce repeat-infinite">Button C</Button>
      </section>

      <section>
        <h3>Changing Animation Play State</h3>
        <Button className="m-1 animate-bounce running">Button A</Button>
        <Button className="m-1 animate-bounce paused">Button B</Button>
      </section>

      <section>
        <h3>Changing Animation Timing Function</h3>
        <Button className="m-1 animate-bounce ease-linear delay-700 duration-700 repeat-infinite">
          Button A
        </Button>
        <Button className="m-1 animate-bounce ease-in delay-500 duration-600 repeat-infinite">
          Button B
        </Button>
        <Button className="m-1 animate-bounce ease-out delay-300 duration-600 repeat-infinite">
          Button C
        </Button>
        <Button className="m-1 animate-bounce ease-in-out delay-100 duration-400 repeat-infinite">
          Button D
        </Button>
      </section>

      <section>
        <h3>Prefers-reduced-motion</h3>
        <Button className="m-1 motion-safe:animate-bounce duration-700 repeat-infinite">
          Button B
        </Button>
      </section>

      <section>
        <h3>Adding Enter Animations</h3>
        <Button className="m-1 animate-in fade-in delay-700 duration-700 repeat-infinite">
          Button A
        </Button>
        <Button className="m-1 animate-in spin-in delay-700 duration-700 repeat-infinite">
          Button B
        </Button>
        <Button className="m-1 animate-in zoom-in delay-700 duration-700 repeat-infinite">
          Button C
        </Button>
        <Button className="m-1 animate-in slide-in-from-top delay-700 duration-700 repeat-infinite">
          Button D
        </Button>
        <Button className="m-1 animate-in slide-in-from-left delay-700 duration-700 repeat-infinite">
          Button E
        </Button>
      </section>

      <section>
        <h3>Adding Exit Animations</h3>
        <Button className="m-1 animate-out fade-out delay-700 duration-700 repeat-infinite">
          Button A
        </Button>
        <Button className="m-1 animate-out spin-out delay-700 duration-700 repeat-infinite">
          Button B
        </Button>
        <Button className="m-1 animate-out zoom-out delay-700 duration-700 repeat-infinite">
          Button C
        </Button>
        <Button className="m-1 animate-out slide-out-from-top delay-700 duration-700 repeat-infinite">
          Button D
        </Button>
        <Button className="m-1 animate-out slide-out-from-left delay-700 duration-700 repeat-infinite">
          Button E
        </Button>
      </section>

      <section>
        <h3>Changing Enter Animation Starting Opacity</h3>
        <Button className="m-1 animate-in fade-in delay-700 duration-700 repeat-infinite">
          Button A
        </Button>
        <Button className="m-1 animate-in fade-in-25 delay-700 duration-700 repeat-infinite">
          Button B
        </Button>
        <Button className="m-1 animate-in fade-in-50 delay-700 duration-700 repeat-infinite">
          Button C
        </Button>
        <Button className="m-1 animate-in fade-in-75 delay-700 duration-700 repeat-infinite">
          Button D
        </Button>
      </section>

      <section>
        <h3>Changing Enter Animation Starting Rotation</h3>
        <Button className="m-1 animate-in spin-in-1 delay-700 duration-700 repeat-infinite">
          Button A
        </Button>
        <Button className="m-1 animate-in spin-in-6 delay-700 duration-700 repeat-infinite">
          Button B
        </Button>
        <Button className="m-1 animate-in spin-in-90 delay-700 duration-700 repeat-infinite">
          Button C
        </Button>
        <Button className="m-1 animate-in spin-in-180 delay-700 duration-700 repeat-infinite">
          Button D
        </Button>
      </section>

      <section>
        <h3>Changing Enter Animation Starting Scale</h3>
        <Button className="m-1 animate-in zoom-in duration-700 delay-700 repeat-infinite">
          Button A
        </Button>
        <Button className="m-1 animate-in zoom-in-50 duration-700 delay-700 repeat-infinite">
          Button B
        </Button>
        <Button className="m-1 animate-in zoom-in-75 duration-700 delay-700 repeat-infinite">
          Button C
        </Button>
        <Button className="m-1 animate-in zoom-in-95 delay-700 duration-700 repeat-infinite">
          Button D
        </Button>
      </section>

      <section>
        <h3>Changing Enter Animation Starting Translate</h3>
        <Button className="m-1 animate-in slide-in-from-top delay-700 duration-700 repeat-infinite">
          Button A
        </Button>
        <Button className="m-1 animate-in slide-in-from-bottom-48 delay-700 duration-700 repeat-infinite">
          Button B
        </Button>
        <Button className="m-1 animate-in slide-in-from-left-72 delay-700 duration-700 repeat-infinite">
          Button C
        </Button>
        <Button className="m-1 animate-in slide-in-from-right-96 delay-700 duration-700 repeat-infinite">
          Button D
        </Button>
      </section>

      <section>
        <h3>Changing Exit Animation Ending Opacity</h3>
        <Button className="m-1 animate-out fade-out delay-700 duration-700 repeat-infinite">
          Button A
        </Button>
        <Button className="m-1 animate-out fade-out-25 delay-700 duration-700 repeat-infinite">
          Button B
        </Button>
        <Button className="m-1 animate-out fade-out-50 delay-700 duration-700 repeat-infinite">
          Button C
        </Button>
        <Button className="m-1 animate-out fade-out-75 delay-700 duration-700 repeat-infinite">
          Button D
        </Button>
      </section>

      <section>
        <h3>Changing Exit Animation Ending Rotation</h3>
        <Button className="m-1 animate-out spin-out-1 delay-700 duration-700 repeat-infinite">
          Button A
        </Button>
        <Button className="m-1 animate-out spin-out-6 delay-700 duration-700 repeat-infinite">
          Button B
        </Button>
        <Button className="m-1 animate-out spin-out-90 delay-700 duration-700 repeat-infinite">
          Button C
        </Button>
        <Button className="m-1 animate-out spin-out-180 delay-700 duration-700 repeat-infinite">
          Button D
        </Button>
      </section>

      <section>
        <h3>Changing Exit Animation Ending Scale</h3>
        <Button className="m-1 animate-out zoom-out delay-700 duration-700 repeat-infinite">
          Button A
        </Button>
        <Button className="m-1 animate-out zoom-out-50 delay-700 duration-700 repeat-infinite">
          Button B
        </Button>
        <Button className="m-1 animate-out zoom-out-75 delay-700 duration-700 repeat-infinite">
          Button C
        </Button>
        <Button className="m-1 animate-out zoom-out-95 delay-700 duration-700 repeat-infinite">
          Button D
        </Button>
      </section>

      <section>
        <h3>Changing Exit Animation Ending Translate</h3>
        <Button className="m-1 animate-out slide-out-to-top delay-700 duration-700 repeat-infinite">
          Button A
        </Button>
        <Button className="m-1 animate-out slide-out-to-bottom-48 delay-700 duration-700 repeat-infinite">
          Button B
        </Button>
        <Button className="m-1 animate-out slide-out-to-left-72 delay-700 duration-700 repeat-infinite">
          Button C
        </Button>
        <Button className="m-1 animate-out slide-out-to-right-96 delay-700 duration-700 repeat-infinite">
          Button D
        </Button>
      </section>
    </div>
  );
}
